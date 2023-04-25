import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import {
	arrFilled as utilsCheckArrFilled,
	objFilled as utilsCheckObjFilled,
} from '@nest-datum-utils/check';
import {
	FailureException,
	MethodNotAllowedException,
	NotFoundException,
} from '@nest-datum-common/exceptions';
import {
	encryptPassword,
	generateVerifyKey,
	generateTokens,
	checkPassword,
	generateAccessToken,
} from '@nest-datum-common/jwt';
import { TransportService } from '@nest-datum/transport';
import { MainService } from '@nest-datum/main';
import { CacheService } from '@nest-datum/cache';
import { UserUserOption } from '../user-user-option/user-user-option.entity';
import { User } from './user.entity';

@Injectable()
export class UserService extends MainService {
	protected readonly withTwoStepRemoval: boolean = true;
	protected readonly withEnvKey: boolean = false;
	protected readonly repositoryConstructor = User;
	protected readonly repositoryBindOptionConstructor = UserUserOption;
	protected readonly mainRelationColumnName: string = 'userId';
	protected readonly optionRelationColumnName: string = 'userOptionId';

	constructor(
		@InjectRepository(User) protected readonly repository: Repository<User>,
		@InjectRepository(UserUserOption) protected repositoryBindOption: Repository<UserUserOption>,
		protected readonly transport: TransportService,
		protected readonly connection: Connection,
		protected readonly repositoryCache: CacheService,
	) {
		super();
	}

	protected manyGetColumns(customColumns: object = {}) {
		return ({
			...super.manyGetColumns(customColumns),
			roleId: true,
			userStatusId: true,
			login: true,
			email: true,
			isDeleted: true,
			isNotDelete: true,
			emailVerifyKey: true,
			emailVerifiedAt: true,
		});
	}

	protected oneGetColumns(customColumns: object = {}): object {
		return ({
			...super.oneGetColumns(customColumns),
			roleId: true,
			userStatusId: true,
			login: true,
			email: true,
			isDeleted: true,
			isNotDelete: true,
			emailVerifyKey: true,
			emailVerifiedAt: true,
		});
	}

	protected manyGetQueryColumns(customColumns: object = {}) {
		return ({
			login: true,
			email: true,
		});
	}

	async register(payload): Promise<any> {
		await this.createQueryRunnerManager();

		try {
			await this.startQueryRunnerManager();

			this.repositoryCache.drop({ key: [ this.prefix(), 'many', '*' ] });

			const firstname = payload['firstname'];
			const lastname = payload['lastname'];

			delete payload['firstname'];
			delete payload['lastname'];

			const data = {
				...payload,
				password: await encryptPassword(payload['password']),
				emailVerifyKey: await generateVerifyKey(payload['email']),
			};
			const output = await this.queryRunner.manager.save(Object.assign(new User(), data));

			await this.queryRunner.manager.save(Object.assign(new UserUserOption(), {
				userId: output['id'],
				userOptionId: 'happ-sso-user-option-firstname',
				content: firstname,
			}));
			await this.queryRunner.manager.save(Object.assign(new UserUserOption(), {
				userId: output['id'],
				userOptionId: 'happ-sso-user-option-lastname',
				content: lastname,
			}));

			await this.transport.send({ 
				name: process.env.SERVICE_MAIL,
				cmd: 'report.create',
			}, {
				letterId: 'mail-letter-base-registration', 
				email: data['email'],
				action: `Register new user "${data['email']}"`,
				reportStatusId: 'mail-report-status-send',
				content: JSON.stringify({
					...data,
					firstname,
					lastname,
				}),
				accessToken: generateAccessToken({
					id: process.env.USER_ID,
					roleId: process.env.USER_ADMIN_ROLE,
					email: process.env.USER_EMAIL,
				}, Date.now()),
			});
			await this.commitQueryRunnerManager();

			return {
				id: output['id'],
				login: output['id'],
			};
		}
		catch (err) {
			await this.rollbackQueryRunnerManager();

			throw new FailureException(err.message);
		}
		finally {
			await this.dropQueryRunnerManager();
		}
	}

	async verify(payload): Promise<any> {
		const user = await this.repository.findOne({
			where: {
				emailVerifyKey: payload['verifyKey'],
			},
		});

		this.repositoryCache.drop({ key: [ this.prefix(), 'many', '*' ] });
		this.repositoryCache.drop({ key: [ this.prefix(), 'one', { id: user['id'] } ] });

		if (!user) {
			throw new NotFoundException(`User with email "${payload['email']}" not found.`);
		}
		if (user['emailVerifiedAt']) {
			throw new MethodNotAllowedException(`Current account already verified.`);
		}
		if ((Date.now() - user['createdAt'].getTime()) > 86400000) {
			throw new MethodNotAllowedException(`Key expired.`);
		}
		await this.repository.save({ 
			...user, 
			emailVerifyKey: '',
			emailVerifiedAt: new Date(),
		});

		return true;
	}

	async login(payload): Promise<any> {
		const user = await this.repository.findOne({
			where: [
				{ email: payload['login'] },
				{ login: payload['login'] },
			],
			relations: {
				userUserOptions: {
					userOption: true,
				},
			},
		});

		if (!user) {
			throw new NotFoundException(`User with login "${payload['login']}" not found.`);
		}
		if (await checkPassword(payload['password'], user['password'])) {
			return await generateTokens(user);
		}
		throw new MethodNotAllowedException(`Wrong password specified.`);
	}

	async recovery(payload): Promise<any> {
		const user = await this.repository.findOne({
			where: {
				email: payload['email'],
			},
		});

		if (!user) {
			throw new NotFoundException(`User with login "${payload['login']}" not found.`);
		}
		if (!user['emailVerifiedAt']) {
			throw new MethodNotAllowedException(`The current user has not activated an account.`);
		}
		const output = { 
			...user, 
			emailVerifyKey: await generateVerifyKey(payload['email']),
		};

		await this.repository.save({
			...user,
			...output,
		});
		await this.transport.send({ 
			name: process.env.SERVICE_MAIL,
			cmd: 'report.create',
		}, {
			letterId: 'mail-letter-base-recovery', 
			email: payload['email'],
			action: `Recovery access for "${payload['email']}"`,
			reportStatusId: 'mail-report-status-send',
			content: JSON.stringify({
				...output,
			}),
			accessToken: generateAccessToken({
				id: process.env.USER_ID,
				roleId: process.env.USER_ADMIN_ROLE,
				email: process.env.USER_EMAIL,
			}, Date.now()),
		});

		return true;
	}

	async reset(payload): Promise<any> {
		const user = await this.repository.findOne({
			where: {
				email: payload['email'],
			},
		});

		if (!user) {
			throw new NotFoundException(`User with login "${payload['login']}" not found.`);
		}
		if (!user['emailVerifiedAt']) {
			throw new MethodNotAllowedException(`Current account already verified.`);
		}
		if (user['emailVerifyKey'] !== payload['verifyKey']) {
			throw new MethodNotAllowedException(`Key not validated.`);
		}
		await this.repository.save({
			...user,
			password: await encryptPassword(payload['password']),
			emailVerifyKey: '',
		});
		return true;
	}

	async refresh(payload): Promise<any> {
		const user = await this.repository.findOne({
			where: {
				id: payload['id'],
			},
			// relations: {
			// 	userUserOptions: {
			// 		userOption: true,
			// 	},
			// },
		});

		if (!user) {
			throw new NotFoundException(`User is undefined.`);
		}
		return await generateTokens(user);
	}

	protected async createProperties(payload: object): Promise<any> {
		if (payload['password']) {
			payload['password'] = await encryptPassword(payload['password']);
		}
		return payload;
	}

	protected async updateProperties(payload: object): Promise<any> {
		if (payload['password']) {
			payload['password'] = await encryptPassword(payload['password']);
		}
		return payload;
	}
}

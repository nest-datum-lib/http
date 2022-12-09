import { ApiTags } from '@nestjs/swagger';
import { 
	Controller,
	Get, 
	Delete,
	Post,
	Patch,
	Body,
	Param,
	Query,
	HttpException,
} from '@nestjs/common';
import { AccessToken } from 'nest-datum/common/src';
import { BalancerService } from 'nest-datum/balancer/src';

@ApiTags(`[ ${process.env.SERVICE_SSO} ] Users`)
@Controller(`${process.env.SERVICE_SSO}/user`)
export class UserController {
	constructor(
		private readonly balancerService: BalancerService,
	) {
	}

	@Post('register')
	async register(
		@Body('email') email: string,
		@Body('login') login: string,
		@Body('firstname') firstname: string,
		@Body('lastname') lastname: string,
		@Body('password') password: string,
		@Body('repeatedPassword') repeatedPassword: string,
	): Promise<any> {
		try {
			return await this.balancerService.send({
				name: process.env.SERVICE_SSO, 
				cmd: 'user.register',
			}, {
				email,
				login,
				firstname,
				lastname,
				password,
				repeatedPassword,
			});
		}
		catch (err) {
			this.balancerService.log(err);

			throw new HttpException(err.message, err.httpCode || 500);
		}
	}

	@Post('verify')
	async verify(@Body('verifyKey') verifyKey: string): Promise<any> {
		try {
			return await this.balancerService.send({
				name: process.env.SERVICE_SSO, 
				cmd: 'user.verify',
			}, {
				verifyKey,
			});
		}
		catch (err) {
			this.balancerService.log(err);

			throw new HttpException(err.message, err.httpCode || 500);
		}
	}

	@Post('login')
	async login(
		@Body('login') login: string,
		@Body('password') password: string,
	): Promise<any> {
		try {
			return await this.balancerService.send({
				name: process.env.SERVICE_SSO, 
				cmd: 'user.login',
			}, {
				login,
				password,
			});
		}
		catch (err) {
			console.log('err', err);
			
			this.balancerService.log(err);

			throw new HttpException(err.message, err.httpCode || 500);
		}
	}

	@Post('recovery')
	async recovery(@Body('email') email: string): Promise<any> {
		try {
			return await this.balancerService.send({
				name: process.env.SERVICE_SSO, 
				cmd: 'user.recovery',
			}, {
				email,
			});
		}
		catch (err) {
			this.balancerService.log(err);

			throw new HttpException(err.message, err.httpCode || 500);
		}
	}

	@Post('reset')
	async reset(
		@Body('password') password: string,
		@Body('repeatedPassword') repeatedPassword: string,
		@Body('verifyKey') verifyKey: string,
	): Promise<any> {
		try {
			return await this.balancerService.send({
				name: process.env.SERVICE_SSO, 
				cmd: 'user.reset',
			}, {
				password,
				repeatedPassword,
				verifyKey,
			});
		}
		catch (err) {
			this.balancerService.log(err);

			throw new HttpException(err.message, err.httpCode || 500);
		}
	}

	@Post('refresh')
	async refresh(
		@Body('accessToken') accessToken: string,
		@Body('refreshToken') refreshToken: string,
	): Promise<any> {
		try {
			return await this.balancerService.send({
				name: process.env.SERVICE_SSO, 
				cmd: 'user.refresh',
			}, {
				accessToken,
				refreshToken,
			});
		}
		catch (err) {
			this.balancerService.log(err);

			throw new HttpException(err.message, err.httpCode || 500);
		}
	}

	@Get()
	async many(
		@AccessToken() accessToken: string,
		@Query('select') select: string,
		@Query('relations') relations: string,
		@Query('page') page: number,
		@Query('limit') limit: number,
		@Query('query') query: string,
		@Query('filter') filter: string,
		@Query('sort') sort: string,
	): Promise<Array<any>> {
		try {
			return await this.balancerService.send({
				name: process.env.SERVICE_SSO, 
				cmd: 'user.many',
			}, {
				accessToken,
				select,
				relations,
				page,
				limit,
				query,
				filter,
				sort,
			});
		}
		catch (err) {
			this.balancerService.log(err);

			throw new HttpException(err.message, err.httpCode || 500);
		}
	}

	@Get(':id')
	async one(
		@AccessToken() accessToken: string,
		@Query('select') select: string,
		@Query('relations') relations: string,
		@Param('id') id: string,
	): Promise<any> {
		try {
			return await this.balancerService.send({
				name: process.env.SERVICE_SSO, 
				cmd: 'user.one',
			}, {
				accessToken,
				select,
				id,
			});
		}
		catch (err) {
			this.balancerService.log(err);

			throw new HttpException(err.message, err.httpCode || 500);
		}
	}

	@Delete(':id')
	async drop(
		@AccessToken() accessToken: string,
		@Param('id') id: string,
	) {
		try {
			return await this.balancerService.send({
				name: process.env.SERVICE_SSO, 
				cmd: 'user.drop',
			}, {
				accessToken,
				id,
			});
		}
		catch (err) {
			this.balancerService.log(err);

			throw new HttpException(err.message, err.httpCode || 500);
		}
	}

	@Post()
	async create(
		@AccessToken() accessToken: string,
		@Body('id') id: string,
		@Body('userId') userId: string,
		@Body('roleId') roleId: string,
		@Body('userStatusId') userStatusId: string,
		@Body('email') email: string,
		@Body('login') login: string,
		@Body('password') password: string,
		@Body('emailVerifyKey') emailVerifyKey: string,
		@Body('emailVerifiedAt') emailVerifiedAt: string,
		@Body('isNotDelete') isNotDelete: boolean,
	) {
		try {
			return await this.balancerService.send({
				name: process.env.SERVICE_SSO, 
				cmd: 'user.create',
			}, {
				accessToken,
				id,
				userId,
				roleId,
				userStatusId,
				login,
				email,
				password,
				emailVerifyKey,
				emailVerifiedAt,
				isNotDelete,
			});
		}
		catch (err) {
			this.balancerService.log(err);

			throw new HttpException(err.message, err.httpCode || 500);
		}
	}

	@Post(':id/options')
	async createOptions(
		@AccessToken() accessToken: string,
		@Param('id') id: string,
		@Body() data,
	) {
		try {
			return await this.balancerService.send({
				name: process.env.SERVICE_SSO, 
				cmd: 'user.createOptions',
			}, {
				accessToken,
				id,
				data,
			});
		}
		catch (err) {
			this.balancerService.log(err);

			throw new HttpException(err.message, err.httpCode || 500);
		}
	}

	@Patch(':id')
	async update(
		@AccessToken() accessToken: string,
		@Param('id') id: string,
		@Body('newId') newId: string,
		@Body('userId') userId: string,
		@Body('roleId') roleId: string,
		@Body('userStatusId') userStatusId: string,
		@Body('login') login: string,
		@Body('email') email: string,
		@Body('password') password: string,
		@Body('emailVerifyKey') emailVerifyKey: string,
		@Body('emailVerifiedAt') emailVerifiedAt: string,
		@Body('isNotDelete') isNotDelete: boolean,
		@Body('isDeleted') isDeleted: boolean,
	) {
		try {
			return await this.balancerService.send({
				name: process.env.SERVICE_SSO, 
				cmd: 'user.update',
			}, {
				accessToken,
				id,
				newId,
				userId,
				roleId,
				userStatusId,
				login,
				email,
				password,
				emailVerifyKey,
				emailVerifiedAt,
				isDeleted,
				isNotDelete,
			});
		}
		catch (err) {
			this.balancerService.log(err);

			throw new HttpException(err.message, err.httpCode || 500);
		}
	}
}

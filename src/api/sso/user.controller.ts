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
import { HttpController } from '@nest-datum-common/controller';
import { AccessToken } from '@nest-datum-common/decorators';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_SSO}/user`)
export class UserController extends HttpController {
	public serviceName = process.env.SERVICE_SSO;
	public entityName = 'user';

	constructor(
		public transportService: TransportService,
	) {
		super();
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
			return await this.transportService.send({
				name: this.serviceName, 
				cmd: `${this.entityName}.register`,
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
			this.log(err);

			throw new HttpException(err.message, err.errorCode || 500);
		}
	}

	@Post('verify')
	async verify(@Body('verifyKey') verifyKey: string): Promise<any> {
		try {
			return await this.transportService.send({
				name: this.serviceName, 
				cmd: `${this.entityName}.verify`,
			}, {
				verifyKey,
			});
		}
		catch (err) {
			this.log(err);

			throw new HttpException(err.message, err.errorCode || 500);
		}
	}

	@Post('login')
	async login(
		@Body('login') login: string,
		@Body('password') password: string,
	): Promise<any> {
		try {
			return await this.transportService.send({
				name: this.serviceName, 
				cmd: `${this.entityName}.login`,
			}, {
				login,
				password,
			});
		}
		catch (err) {
			this.log(err);

			throw new HttpException(err.message, err.errorCode || 500);
		}
	}

	@Post('recovery')
	async recovery(@Body('email') email: string): Promise<any> {
		try {
			return await this.transportService.send({
				name: this.serviceName, 
				cmd: `${this.entityName}.recovery`,
			}, {
				email,
			});
		}
		catch (err) {
			this.log(err);

			throw new HttpException(err.message, err.errorCode || 500);
		}
	}

	@Post('reset')
	async reset(
		@Body('password') password: string,
		@Body('repeatedPassword') repeatedPassword: string,
		@Body('verifyKey') verifyKey: string,
	): Promise<any> {
		try {
			return await this.transportService.send({
				name: this.serviceName, 
				cmd: `${this.entityName}.reset`,
			}, {
				password,
				repeatedPassword,
				verifyKey,
			});
		}
		catch (err) {
			this.log(err);

			throw new HttpException(err.message, err.errorCode || 500);
		}
	}

	@Post('refresh')
	async refresh(
		@Body('accessToken') accessToken: string,
		@Body('refreshToken') refreshToken: string,
	): Promise<any> {
		try {
			return await this.transportService.send({
				name: this.serviceName, 
				cmd: `${this.entityName}.refresh`,
			}, {
				accessToken,
				refreshToken,
			});
		}
		catch (err) {
			this.log(err);

			throw new HttpException(err.message, err.errorCode || 500);
		}
	}
}

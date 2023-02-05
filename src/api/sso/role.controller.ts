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

@Controller(`${process.env.SERVICE_SSO}/role`)
export class RoleController extends HttpController {
	public serviceName = process.env.SERVICE_SSO;
	public entityName = 'role';
	public entityNameRelation = 'roleOptionRelation';

	constructor(
		public transportService: TransportService,
	) {
		super();
	}

	@Post(':id/option')
	async createOption(
		@AccessToken() accessToken: string,
		@Param('id') roleOptionId: string,
		@Body('roleId') roleId: string,
	) {
		try {
			return await this.transportService.send({
				name: this.serviceName, 
				cmd: `${this.entityNameRelation}.create`,
			}, {
				accessToken,
				roleOptionId,
				roleId,
			});
		}
		catch (err) {
			this.log(err);

			throw new HttpException(err.message, err.errorCode || 500);
		}
	}

	@Post(':id/options')
	async createOptions(
		@AccessToken() accessToken: string,
		@Param('id') id: string,
		@Body() data,
	) {
		try {
			return await this.transportService.send({
				name: this.serviceName, 
				cmd: `${this.entityName}.createOptions`,
			}, {
				accessToken,
				id,
				data,
			});
		}
		catch (err) {
			this.log(err);

			throw new HttpException(err.message, err.errorCode || 500);
		}
	}

	@Post(':id/access')
	async createAccesses(
		@AccessToken() accessToken: string,
		@Param('id') roleId: string,
		@Body('accessId') accessId: string,
	) {
		try {
			return await this.transportService.send({
				name: this.serviceName,
				cmd: 'roleAccess.create',
			}, {
				accessToken,
				roleId,
				accessId,
			});
		}
		catch (err) {
			this.log(err);

			throw new HttpException(err.message, err.errorCode || 500);
		}
	}

	@Post()
	async create(
		@AccessToken() accessToken: string,
		@Body('id') id: string,
		@Body('userId') userId: string,
		@Body('roleStatusId') roleStatusId: string,
		@Body('name') name: string,
		@Body('description') description: string,
		@Body('isNotDelete') isNotDelete: boolean,
	) {
		try {
			return await this.transportService.send({
				name: this.serviceName, 
				cmd: `${this.entityName}.create`,
			}, {
				accessToken,
				id,
				userId,
				roleStatusId,
				name,
				description,
				isNotDelete,
			});
		}
		catch (err) {
			this.log(err);

			throw new HttpException(err.message, err.errorCode || 500);
		}
	}

	@Patch(':id')
	async update(
		@AccessToken() accessToken: string,
		@Param('id') id: string,
		@Body('id') newId: string,
		@Body('userId') userId: string,
		@Body('roleStatusId') roleStatusId: string,
		@Body('name') name: string,
		@Body('description') description: string,
		@Body('isNotDelete') isNotDelete: boolean,
		@Body('isDeleted') isDeleted: boolean,
	) {
		try {
			return await this.transportService.send({
				name: this.serviceName, 
				cmd: `${this.entityName}.update`,
			}, {
				accessToken,
				id,
				newId,
				userId,
				roleStatusId,
				name,
				description,
				isNotDelete,
				isDeleted,
			});
		}
		catch (err) {
			this.log(err);

			throw new HttpException(err.message, err.errorCode || 500);
		}
	}
}

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

@Controller(`${process.env.SERVICE_DATA_TYPE}/type`)
export class TypeController extends HttpController {
	public serviceName = process.env.SERVICE_DATA_TYPE;
	public entityName = 'type';
	public entityNameRelation = 'typeOptionRelation';

	constructor(
		public transportService: TransportService,
	) {
		super();
	}

	@Post(':id/option')
	async createOption(
		@AccessToken() accessToken: string,
		@Param('id') typeOptionId: string,
		@Body('typeId') typeId: string,
	) {
		try {
			return await this.transportService.send({
				name: this.serviceName, 
				cmd: `${this.entityNameRelation}.create`,
			}, {
				accessToken,
				typeOptionId,
				typeId,
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

	@Post()
	async create(
		@AccessToken() accessToken: string,
		@Body('id') id: string,
		@Body('userId') userId: string,
		@Body('parentId') parentId: string,
		@Body('typeStatusId') typeStatusId: string,
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
				parentId,
				typeStatusId,
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
		@Body('parentId') parentId: string,
		@Body('typeStatusId') typeStatusId: string,
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
				parentId,
				typeStatusId,
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

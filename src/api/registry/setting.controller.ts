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

@Controller(`${process.env.SERVICE_REGISTRY}/setting`)
export class SettingController extends HttpController {
	public serviceName = process.env.SERVICE_REGISTRY;
	public entityName = 'setting';

	constructor(
		public transportService: TransportService,
	) {
		super();
	}

	@Post()
	async create(
		@AccessToken() accessToken: string,
		@Body('id') id: string,
		@Body('userId') userId: string,
		@Body('name') name: string,
		@Body('description') description: string,
		@Body('dataTypeId') dataTypeId: string,
		@Body('value') value: string,
		@Body('regex') regex: string,
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
				name,
				description,
				dataTypeId,
				value,
				regex,
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
		@Body('name') name: string,
		@Body('description') description: string,
		@Body('dataTypeId') dataTypeId: string,
		@Body('value') value: string,
		@Body('regex') regex: string,
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
				name,
				description,
				dataTypeId,
				value,
				regex,
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
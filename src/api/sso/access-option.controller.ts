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

@Controller(`${process.env.SERVICE_SSO}/access-option`)
export class AccessOptionController extends HttpController {
	public serviceName = process.env.SERVICE_SSO;
	public entityName = 'accessOption';

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
		@Body('regex') regex: string,
		@Body('defaultValue') defaultValue: string,
		@Body('isRequired') isRequired: boolean,
		@Body('isMultiline') isMultiline: boolean,
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
				regex,
				defaultValue,
				isRequired,
				isMultiline,
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
		@Body('regex') regex: string,
		@Body('defaultValue') defaultValue: string,
		@Body('isRequired') isRequired: boolean,
		@Body('isMultiline') isMultiline: boolean,
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
				regex,
				defaultValue,
				isRequired,
				isMultiline,
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

import { 
	Controller,
	Get, 
	Delete,
	Post,
	Patch,
	Body,
	Param,
	Query,
	ForbiddenException,
} from '@nestjs/common';
import { HttpTcpOptionController } from '@nest-datum/controller';
import { AccessToken } from '@nest-datum-common/decorators';
import { TransportService } from '@nest-datum/transport';
import {
	strName as utilsCheckStrName,
	strId as utilsCheckStrId,
} from '@nest-datum-utils/check';

@Controller(`${process.env.SERVICE_FORMS}/field`)
export class FieldController extends HttpTcpOptionController {
	protected serviceName = process.env.SERVICE_FORMS;
	protected entityName = 'field';
	protected entityOptionContentName = 'fieldOptionRelation';

	constructor(
		protected transportService: TransportService,
	) {
		super();
	}

	async validateCreate(options) {
		if (!utilsCheckStrName(options['name'])) {
			throw new ForbiddenException(`Property "name" is not valid.`);
		}
		if (!utilsCheckStrId(options['fieldStatusId'])) {
			throw new ForbiddenException(`Property "fieldStatusId" is not valid.`);
		}
		if (!utilsCheckStrId(options['dataTypeId'])) {
			throw new ForbiddenException(`Property "dataTypeId" is not valid.`);
		}
		return await this.validateUpdate(options);
	}

	async validateUpdate(options) {
		return {
			...await super.validateUpdate(options),
			...(options['fieldStatusId'] && utilsCheckStrId(options['fieldStatusId'])) 
				? { fieldStatusId: options['fieldStatusId'] } 
				: {},
			...(options['dataTypeId'] && utilsCheckStrId(options['dataTypeId'])) 
				? { dataTypeId: options['dataTypeId'] } 
				: {},
		};
	}

	@Post()
	async create(
		@AccessToken() accessToken: string,
		@Body('id') id: string,
		@Body('userId') userId: string,
		@Body('fieldStatusId') fieldStatusId: string,
		@Body('dataTypeId') dataTypeId: string,
		@Body('name') name: string,
		@Body('description') description: string,
		@Body('isRequired') isRequired: boolean,
		@Body('isNotDelete') isNotDelete: boolean,
	) {
		return await this.serviceHandlerWrapper(async () => await this.transportService.send({
			name: this.serviceName, 
			cmd: `${this.entityName}.create`,
		}, await this.validateCreate({
			accessToken,
			id,
			userId,
			fieldStatusId,
			dataTypeId,
			name,
			description,
			isRequired,
			isNotDelete,
		})));
	}

	@Patch(':id')
	async update(
		@AccessToken() accessToken: string,
		@Param('id') id: string,
		@Body('id') newId: string,
		@Body('userId') userId: string,
		@Body('fieldStatusId') fieldStatusId: string,
		@Body('dataTypeId') dataTypeId: string,
		@Body('name') name: string,
		@Body('description') description: string,
		@Body('isRequired') isRequired: boolean,
		@Body('isNotDelete') isNotDelete: boolean,
		@Body('isDeleted') isDeleted: boolean,
	) {
		return await this.serviceHandlerWrapper(async () => await this.transportService.send({
			name: this.serviceName, 
			cmd: `${this.entityName}.update`,
		}, await this.validateUpdate({
			accessToken,
			id,
			newId,
			userId,
			fieldStatusId,
			dataTypeId,
			name,
			description,
			isNotDelete,
			isRequired,
			isDeleted,
		})));
	}
}

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
import { HttpTcpController } from '@nest-datum/controller';
import { AccessToken } from '@nest-datum-common/decorators';
import { TransportService } from '@nest-datum/transport';
import {
	strName as utilsCheckStrName,
	strId as utilsCheckStrId,
	exists as utilsCheckExists,
} from '@nest-datum-utils/check';

@Controller(`${process.env.SERVICE_FORMS}/content`)
export class ContentController extends HttpTcpController {
	protected serviceName = process.env.SERVICE_FORMS;
	protected entityName = 'content';
	protected entityOptionContentName = 'contentOptionRelation';

	constructor(
		protected transportService: TransportService,
	) {
		super();
	}

	async validateFields(options) {
		if (!utilsCheckStrId(options['contentId'])) {
			throw new ForbiddenException(`Property "contentId" is not valid.`);
		}
		if (!utilsCheckStrId(options['fieldId'])) {
			throw new ForbiddenException(`Property "fieldId" is not valid.`);
		}
		return {
			...await super.validateCreate(options),
			contentId: options['contentId'],
			fieldId: options['fieldId'],
			...(options['fieldName'] && utilsCheckStrName(options['fieldName'])) 
				? { fieldName: options['fieldName'] } 
				: {},
			...utilsCheckExists(options['value'])
				? { value: String(options['value']) } 
				: {},
		};
	}

	async validateCreate(options) {
		if (!utilsCheckStrId(options['formId'])) {
			throw new ForbiddenException(`Property "formId" is not valid.`);
		}
		if (!utilsCheckStrId(options['contentStatusId'])) {
			throw new ForbiddenException(`Property "contentStatusId" is not valid.`);
		}
		return await this.validateUpdate(options);
	}

	async validateUpdate(options) {
		return {
			...await super.validateUpdate(options),
			...(options['formId'] && utilsCheckStrId(options['formId'])) 
				? { formId: options['formId'] } 
				: {},
			...(options['contentStatusId'] && utilsCheckStrId(options['contentStatusId'])) 
				? { contentStatusId: options['contentStatusId'] } 
				: {},
		};
	}

	@Post()
	async create(
		@AccessToken() accessToken: string,
		@Body('id') id: string,
		@Body('userId') userId: string,
		@Body('contentStatusId') contentStatusId: string,
		@Body('formId') formId: string,
		@Body('isNotDelete') isNotDelete: boolean,
	) {
		return await this.serviceHandlerWrapper(async () => await this.transportService.send({
			name: this.serviceName, 
			cmd: `${this.entityName}.create`,
		}, await this.validateCreate({
			accessToken,
			id,
			userId,
			contentStatusId,
			formId,
			isNotDelete,
		})));
	}

	@Patch(':id')
	async update(
		@AccessToken() accessToken: string,
		@Param('id') id: string,
		@Body('id') newId: string,
		@Body('userId') userId: string,
		@Body('contentStatusId') contentStatusId: string,
		@Body('formId') formId: string,
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
			contentStatusId,
			formId,
			isNotDelete,
			isDeleted,
		})));
	}

	@Post(':id/field')
	async createFields(
		@AccessToken() accessToken: string,
		@Param('id') id: string,
		@Body('fieldId') fieldId: string,
		@Body('fieldName') fieldName: string,
		@Body('value') value: string,
	) {
		return await this.serviceHandlerWrapper(async () => await this.transportService.send({
			name: this.serviceName, 
			cmd: `fieldContent.create`,
		}, await this.validateFields({
			accessToken,
			contentId: id,
			fieldId,
			fieldName,
			value,
		})));
	}
}

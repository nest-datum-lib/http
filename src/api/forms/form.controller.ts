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
	strId as utilsCheckStrId,
	strName as utilsCheckStrName,
} from '@nest-datum-utils/check';

@Controller(`${process.env.SERVICE_FORMS}/form`)
export class FormController extends HttpTcpOptionController {
	protected serviceName = process.env.SERVICE_FORMS;
	protected entityName = 'form';
	protected entityOptionContentName = 'formOptionRelation';

	constructor(
		protected transportService: TransportService,
	) {
		super();
	}

	async validateFields(options) {
		if (!utilsCheckStrId(options['formId'])) {
			throw new ForbiddenException(`Property "formId" is not valid.`);
		}
		if (!utilsCheckStrId(options['fieldId'])) {
			throw new ForbiddenException(`Property "fieldId" is not valid.`);
		}
		return {
			...await super.validateCreate(options),
			formId: options['formId'],
			fieldId: options['fieldId'],
		};
	}

	async validateCreate(options) {
		if (!utilsCheckStrName(options['name'])) {
			throw new ForbiddenException(`Property "name" is not valid.`);
		}
		if (!utilsCheckStrId(options['formStatusId'])) {
			throw new ForbiddenException(`Property "formStatusId" is not valid.`);
		}
		return await this.validateUpdate(options);
	}

	async validateUpdate(options) {
		return {
			...await super.validateUpdate(options),
			...(options['formStatusId'] && utilsCheckStrId(options['formStatusId'])) 
				? { formStatusId: options['formStatusId'] } 
				: {},
		};
	}

	@Post(':id/field')
	async createFields(
		@AccessToken() accessToken: string,
		@Param('id') formId: string,
		@Body('fieldId') fieldId: string,
	) {
		return await this.serviceHandlerWrapper(async () => await this.transportService.send({
			name: this.serviceName, 
			cmd: `formField.create`,
		}, await this.validateFields({
			accessToken,
			formId,
			fieldId,
		})));
	}

	@Post()
	async create(
		@AccessToken() accessToken: string,
		@Body('id') id: string,
		@Body('userId') userId: string,
		@Body('formStatusId') formStatusId: string,
		@Body('name') name: string,
		@Body('description') description: string,
		@Body('isNotDelete') isNotDelete: boolean,
	) {
		return await this.serviceHandlerWrapper(async () => await this.transportService.send({
			name: this.serviceName, 
			cmd: `${this.entityName}.create`,
		}, await this.validateCreate({
			accessToken,
			id,
			userId,
			formStatusId,
			name,
			description,
			isNotDelete,
		})));
	}

	@Patch(':id')
	async update(
		@AccessToken() accessToken: string,
		@Param('id') id: string,
		@Body('id') newId: string,
		@Body('userId') userId: string,
		@Body('formStatusId') formStatusId: string,
		@Body('name') name: string,
		@Body('description') description: string,
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
			formStatusId,
			name,
			description,
			isNotDelete,
			isDeleted,
		})));
	}
}

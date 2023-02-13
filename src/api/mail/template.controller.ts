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
	strEmail as utilsCheckStrEmail,
} from '@nest-datum-utils/check';

@Controller(`${process.env.SERVICE_MAIL}/template`)
export class TemplateController extends HttpTcpOptionController {
	protected serviceName = process.env.SERVICE_MAIL;
	protected entityName = 'template';
	protected entityOptionContentName = 'templateOptionRelation';

	constructor(
		protected transportService: TransportService,
	) {
		super();
	}

	async validateCreate(options) {
		if (!utilsCheckStrName(options['name'])) {
			throw new ForbiddenException(`Property "name" is not valid.`);
		}
		if (!utilsCheckStrEmail(options['fromEmail'])) {
			throw new ForbiddenException(`Property "fromEmail" is not valid.`);
		}
		if (!utilsCheckStrName(options['fromName'])) {
			throw new ForbiddenException(`Property "fromName" is not valid.`);
		}
		if (!utilsCheckStrId(options['templateStatusId'])) {
			throw new ForbiddenException(`Property "templateStatusId" is not valid.`);
		}
		return await this.validateUpdate(options);
	}

	async validateUpdate(options) {
		return {
			...await super.validateUpdate(options),
			...(options['fromEmail'] && utilsCheckStrEmail(options['fromEmail'])) 
				? { fromEmail: options['fromEmail'] } 
				: {},
			...(options['fromName'] && utilsCheckStrName(options['fromName'])) 
				? { fromName: options['fromName'] } 
				: {},
			...(options['templateStatusId'] && utilsCheckStrId(options['templateStatusId'])) 
				? { templateStatusId: options['templateStatusId'] } 
				: {},
		};
	}

	@Post()
	async create(
		@AccessToken() accessToken: string,
		@Body('id') id: string,
		@Body('userId') userId: string,
		@Body('templateStatusId') templateStatusId: string,
		@Body('name') name: string,
		@Body('description') description: string,
		@Body('fromEmail') fromEmail: string,
		@Body('fromName') fromName: string,
		@Body('isNotDelete') isNotDelete: boolean,
	) {
		return await this.serviceHandlerWrapper(async () => await this.transportService.send({
			name: this.serviceName, 
			cmd: `${this.entityName}.create`,
		}, await this.validateCreate({
			accessToken,
			id,
			userId,
			templateStatusId,
			name,
			description,
			fromEmail,
			fromName,
			isNotDelete,
		})));
	}

	@Patch(':id')
	async update(
		@AccessToken() accessToken: string,
		@Param('id') id: string,
		@Body('id') newId: string,
		@Body('userId') userId: string,
		@Body('templateStatusId') templateStatusId: string,
		@Body('name') name: string,
		@Body('description') description: string,
		@Body('fromEmail') fromEmail: string,
		@Body('fromName') fromName: string,
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
			templateStatusId,
			name,
			description,
			fromEmail,
			fromName,
			isNotDelete,
			isDeleted,
		})));
	}
}

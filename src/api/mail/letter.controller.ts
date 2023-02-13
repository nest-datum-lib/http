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
	strDescription as utilsCheckStrDescription,
} from '@nest-datum-utils/check';

@Controller(`${process.env.SERVICE_MAIL}/letter`)
export class LetterController extends HttpTcpOptionController {
	protected serviceName = process.env.SERVICE_MAIL;
	protected entityName = 'letter';
	protected entityOptionContentName = 'letterOptionRelation';

	constructor(
		protected transportService: TransportService,
	) {
		super();
	}

	async validateCreate(options) {
		if (!utilsCheckStrName(options['name'])) {
			throw new ForbiddenException(`Property "name" is not valid.`);
		}
		if (!utilsCheckStrDescription(options['subject'])) {
			throw new ForbiddenException(`Property "subject" is not valid.`);
		}
		if (!utilsCheckStrDescription(options['textPart'])) {
			throw new ForbiddenException(`Property "textPart" is not valid.`);
		}
		if (!utilsCheckStrId(options['templateId'])) {
			throw new ForbiddenException(`Property "templateId" is not valid.`);
		}
		if (!utilsCheckStrId(options['letterStatusId'])) {
			throw new ForbiddenException(`Property "letterStatusId" is not valid.`);
		}
		return await this.validateUpdate(options);
	}

	async validateUpdate(options) {
		return {
			...await super.validateUpdate(options),
			...(options['subject'] && utilsCheckStrDescription(options['subject'])) 
				? { subject: options['subject'] } 
				: {},
			...(options['textPart'] && utilsCheckStrDescription(options['textPart'])) 
				? { textPart: options['textPart'] } 
				: {},
			...(options['letterStatusId'] && utilsCheckStrId(options['letterStatusId'])) 
				? { letterStatusId: options['letterStatusId'] } 
				: {},
			...(options['templateId'] && utilsCheckStrId(options['templateId'])) 
				? { templateId: options['templateId'] } 
				: {},
		};
	}

	@Post()
	async create(
		@AccessToken() accessToken: string,
		@Body('id') id: string,
		@Body('userId') userId: string,
		@Body('letterStatusId') letterStatusId: string,
		@Body('name') name: string,
		@Body('templateId') templateId: string,
		@Body('description') description: string,
		@Body('subject') subject: string,
		@Body('textPart') textPart: string,
		@Body('isNotDelete') isNotDelete: boolean,
	) {
		return await this.serviceHandlerWrapper(async () => await this.transportService.send({
			name: this.serviceName, 
			cmd: `${this.entityName}.create`,
		}, await this.validateCreate({
			accessToken,
			id,
			userId,
			letterStatusId,
			templateId,
			name,
			description,
			subject,
			textPart,
			isNotDelete,
		})));
	}

	@Patch(':id')
	async update(
		@AccessToken() accessToken: string,
		@Param('id') id: string,
		@Body('id') newId: string,
		@Body('userId') userId: string,
		@Body('letterStatusId') letterStatusId: string,
		@Body('templateId') templateId: string,
		@Body('name') name: string,
		@Body('description') description: string,
		@Body('subject') subject: string,
		@Body('textPart') textPart: string,
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
			letterStatusId,
			templateId,
			name,
			description,
			subject,
			textPart,
			isNotDelete,
			isDeleted,
		})));
	}
}

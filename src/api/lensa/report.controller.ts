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
	str as utilsCheckStr,
	strId as utilsCheckStrId,
	strName as utilsCheckStrName,
	strEmail as utilsCheckStrEmail,
	strDescription as utilsCheckStrDescription,
} from '@nest-datum-utils/check';
import { 
	checkToken,
	getUser, 
} from '@nest-datum/jwt';

@Controller(`${process.env.SERVICE_LENSA}/report`)
export class ReportController extends HttpTcpController {
	public serviceName = process.env.SERVICE_LENSA;
	public entityName = 'report';

	constructor(
		public transportService: TransportService,
	) {
		super();
	}

	async validateCreate(options) {
		if (!utilsCheckStrId(options['contentId'])) {
			throw new ForbiddenException(`Property "contentId" is not valid.`);
		}
		if (!utilsCheckStrId(options['fileId'])) {
			throw new ForbiddenException(`Property "fileId" is not valid.`);
		}
		if (!utilsCheckStrId(options['reportStatusId'])) {
			throw new ForbiddenException(`Property "reportStatusId" is not valid.`);
		}
		return await this.validateUpdate(options);
	}

	async validateUpdate(options) {
		return {
			...await super.validateUpdate(options),
			...(options['reportStatusId'] && utilsCheckStrId(options['reportStatusId'])) 
				? { reportStatusId: options['reportStatusId'] } 
				: {},
			...(options['contentId'] && utilsCheckStrId(options['contentId'])) 
				? { contentId: options['contentId'] } 
				: {},
			...(options['fileId'] && utilsCheckStrId(options['fileId'])) 
				? { fileId: options['fileId'] } 
				: {},
		};
	}

	@Post()
	async create(
		@AccessToken() accessToken: string,
		@Body('id') id: string,
		@Body('userId') userId: string,
		@Body('contentId') contentId: string,
		@Body('reportStatusId') reportStatusId: string,
		@Body('fileId') fileId: string,
	) {
		return await this.serviceHandlerWrapper(async () => await this.transportService.send({
			name: this.serviceName, 
			cmd: `${this.entityName}.create`,
		}, await this.validateCreate({
			accessToken,
			id,
			userId,
			reportStatusId,
			contentId,
			fileId,
		})));
	}

	@Patch(':id')
	async update(
		@AccessToken() accessToken: string,
		@Param('id') id: string,
		@Body('newId') newId: string,
		@Body('userId') userId: string,
		@Body('contentId') contentId: string,
		@Body('reportStatusId') reportStatusId: string,
		@Body('fileId') fileId: string,
	) {
		return await this.serviceHandlerWrapper(async () => await this.transportService.send({
			name: this.serviceName, 
			cmd: `${this.entityName}.update`,
		}, await this.validateCreate({
			accessToken,
			id,
			newId,
			userId,
			contentId,
			reportStatusId,
			fileId,
		})));
	}
}

import { 
	Controller,
	Post,
	Patch,
	Body,
	Param,
	UnauthorizedException,
	MethodNotAllowedException,
} from '@nestjs/common';
import { AccessToken } from '@nest-datum-common/decorators';
import { TransportService } from '@nest-datum/transport';
import { HttpTcpController } from '@nest-datum-common/controllers';
import { 
	exists as utilsCheckExists,
	strId as utilsCheckStrId,
} from '@nest-datum-utils/check';

@Controller(`${process.env.SERVICE_CV}/report`)
export class ReportHttpTcpController extends HttpTcpController {
	protected readonly serviceName: string = process.env.SERVICE_CV;
	protected readonly entityName: string = 'report';

	constructor(
		protected transport: TransportService,
	) {
		super();
	}

	async validateCreate(options) {
		if (!utilsCheckStrId(options['reportStatusId'])) {
			throw new MethodNotAllowedException(`Property "reportStatusId" is not valid.`);
		}
		if (!utilsCheckStrId(options['contentId'])) {
			throw new MethodNotAllowedException(`Property "contentId" is not valid.`);
		}
		if (!utilsCheckStrId(options['fileId'])) {
			throw new MethodNotAllowedException(`Property "fileId" is not valid.`);
		}
		return await super.validateCreate(options);
	}

	async validateUpdate(options) {
		const output = {};

		if (utilsCheckExists(options['contentId'])) {
			if (!utilsCheckStrId(options['contentId'])) {
				throw new MethodNotAllowedException(`Property "contentId" is not valid.`);
			}
			output['contentId'] = options['contentId'];
		}
		if (utilsCheckExists(options['fileId'])) {
			if (!utilsCheckStrId(options['fileId'])) {
				throw new MethodNotAllowedException(`Property "fileId" is not valid.`);
			}
			output['fileId'] = options['fileId'];
		}
		if (utilsCheckExists(options['reportStatusId'])) {
			if (!utilsCheckStrId(options['reportStatusId'])) {
				throw new MethodNotAllowedException(`Property "reportStatusId" is not valid.`);
			}
			output['reportStatusId'] = options['reportStatusId'];
		}
		return {
			...await super.validateUpdate(options),
			...output,
		};
	}

	@Post()
	async create(
		@AccessToken() accessToken: string,
		@Body('id') id: string,
		@Body('userId') userId: string,
		@Body('reportStatusId') reportStatusId: string,
		@Body('contentId') contentId: string,
		@Body('fileId') fileId: string,
	) {
		return await this.serviceHandlerWrapper(
			async () => await this.transport.send({
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
		@Body('id') newId: string,
		@Body('userId') userId: string,
		@Body('reportStatusId') reportStatusId: string,
		@Body('contentId') contentId: string,
		@Body('fileId') fileId: string,
		@Body('isDeleted') isDeleted: boolean,
	) {
		return await this.serviceHandlerWrapper(
			async () => await this.transport.send({
			name: this.serviceName, 
			cmd: `${this.entityName}.update`,
		}, await this.validateUpdate({
			accessToken,
			id,
			newId,
			userId,
			reportStatusId,
			contentId,
			fileId,
			isDeleted,
		})));
	}
}

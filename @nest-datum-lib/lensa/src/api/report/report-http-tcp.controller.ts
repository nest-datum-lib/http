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
	strDescription as utilsCheckStrDescription,
	strFilled as utilsCheckStrFilled,
	strEmail as utilsCheckStrEmail,
	str as utilsCheckStr,
} from '@nest-datum-utils/check';

@Controller(`${process.env.SERVICE_LENSA}/report`)
export class ReportHttpTcpController extends HttpTcpController {
	protected readonly serviceName: string = process.env.SERVICE_LENSA;
	protected readonly entityName: string = 'report';

	constructor(
		protected transport: TransportService,
	) {
		super();
	}

	async validateCreate(options) {
		if (!utilsCheckStrId(options['lensaId'])) {
			throw new MethodNotAllowedException(`Property "lensaId" is not valid.`);
		}
		if (!utilsCheckStrId(options['targetId'])) {
			throw new MethodNotAllowedException(`Property "targetId" is not valid.`);
		}
		if (!utilsCheckStr(options['source'])) {
			throw new MethodNotAllowedException(`Property "source" is not valid.`);
		}
		if (!utilsCheckStr(options['candidateSource'])) {
			throw new MethodNotAllowedException(`Property "candidateSource" is not valid.`);
		}
		if (!utilsCheckStr(options['customerCategory'])) {
			throw new MethodNotAllowedException(`Property "customerCategory" is not valid.`);
		}
		if (!utilsCheckStrId(options['fileId'])) {
			throw new MethodNotAllowedException(`Property "fileId" is not valid.`);
		}
		if (!utilsCheckStr(options['language'])) {
			throw new MethodNotAllowedException(`Property "language" is not valid.`);
		}
		if (!utilsCheckStr(options['jobTitle'])) {
			throw new MethodNotAllowedException(`Property "jobTitle" is not valid.`);
		}
		if (!utilsCheckStr(options['firstName'])) {
			throw new MethodNotAllowedException(`Property "firstName" is not valid.`);
		}
		if (!utilsCheckStrEmail(options['email'])) {
			throw new MethodNotAllowedException(`Property "email" is not valid.`);
		}
		if (!utilsCheckStr(options['state'])) {
			throw new MethodNotAllowedException(`Property "state" is not valid.`);
		}
		if (!utilsCheckStr(options['city'])) {
			throw new MethodNotAllowedException(`Property "city" is not valid.`);
		}
		return await this.validateUpdate(options);
	}

	async validateUpdate(options) {
		const output = {};

		if (utilsCheckExists(options['lensaId'])) {
			if (!utilsCheckStrId(options['lensaId'])) {
				throw new MethodNotAllowedException(`Property "lensaId" is not valid.`);
			}
			output['lensaId'] = options['lensaId'];
		}
		if (!utilsCheckStrId(options['targetId'])) {
			if (!utilsCheckStrId(options['targetId'])) {
				throw new MethodNotAllowedException(`Property "targetId" is not valid.`);
			}
			output['targetId'] = options['targetId'];
		}
		if (utilsCheckExists(options['source'])) {
			if (!utilsCheckStr(options['source'])) {
				throw new MethodNotAllowedException(`Property "source" is not valid.`);
			}
			output['source'] = options['source'];
		}
		if (utilsCheckExists(options['candidateSource'])) {
			if (!utilsCheckStr(options['candidateSource'])) {
				throw new MethodNotAllowedException(`Property "candidateSource" is not valid.`);
			}
			output['candidateSource'] = options['candidateSource'];
		}
		if (utilsCheckExists(options['customerCategory'])) {
			if (!utilsCheckStr(options['customerCategory'])) {
				throw new MethodNotAllowedException(`Property "customerCategory" is not valid.`);
			}
			output['customerCategory'] = options['customerCategory'];
		}
		if (utilsCheckExists(options['fileId'])) {
			if (!utilsCheckStrId(options['fileId'])) {
				throw new MethodNotAllowedException(`Property "fileId" is not valid.`);
			}
			output['fileId'] = options['fileId'];
		}
		if (utilsCheckExists(options['language'])) {
			if (!utilsCheckStr(options['language'])) {
				throw new MethodNotAllowedException(`Property "language" is not valid.`);
			}
			output['language'] = options['language'];
		}
		if (utilsCheckExists(options['jobTitle'])) {
			if (!utilsCheckStr(options['jobTitle'])) {
				throw new MethodNotAllowedException(`Property "jobTitle" is not valid.`);
			}
			output['jobTitle'] = options['jobTitle'];
		}
		if (utilsCheckExists(options['firstName'])) {
			if (!utilsCheckStr(options['firstName'])) {
				throw new MethodNotAllowedException(`Property "firstName" is not valid.`);
			}
			output['firstName'] = options['firstName'];
		}
		if (utilsCheckExists(options['email'])) {
			if (!utilsCheckStrEmail(options['email'])) {
				throw new MethodNotAllowedException(`Property "email" is not valid.`);
			}
			output['email'] = options['email'];
		}
		if (utilsCheckExists(options['state'])) {
			if (!utilsCheckStr(options['state'])) {
				throw new MethodNotAllowedException(`Property "state" is not valid.`);
			}
			output['state'] = options['state'];
		}
		if (utilsCheckExists(options['city'])) {
			if (!utilsCheckStr(options['city'])) {
				throw new MethodNotAllowedException(`Property "city" is not valid.`);
			}
			output['city'] = options['city'];
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
		@Body('lensaId') lensaId: string,
		@Body('targetId') targetId: string,
		@Body('source') source: string,
		@Body('candidateSource') candidateSource: string,
		@Body('customerCategory') customerCategory: string,
		@Body('fileId') fileId: string,
		@Body('language') language: string,
		@Body('jobTitle') jobTitle: string,
		@Body('firstName') firstName: string,
		@Body('email') email: string,
		@Body('state') state: string,
		@Body('city') city: string,
	) {
		return await this.serviceHandlerWrapper(
			async () => await this.transport.send({
			name: this.serviceName, 
			cmd: `${this.entityName}.create`,
		}, await this.validateCreate({
			accessToken,
			id,
			lensaId,
			targetId,
			source,
			candidateSource,
			customerCategory,
			fileId,
			language,
			jobTitle,
			firstName,
			email,
			state,
			city,
		})));
	}

	@Patch(':id')
	async update(
		@AccessToken() accessToken: string,
		@Param('id') id: string,
		@Body('id') newId: string,
		@Body('lensaId') lensaId: string,
		@Body('targetId') targetId: string,
		@Body('source') source: string,
		@Body('candidateSource') candidateSource: string,
		@Body('customerCategory') customerCategory: string,
		@Body('fileId') fileId: string,
		@Body('language') language: string,
		@Body('jobTitle') jobTitle: string,
		@Body('firstName') firstName: string,
		@Body('email') email: string,
		@Body('state') state: string,
		@Body('city') city: string,
	) {
		return await this.serviceHandlerWrapper(
			async () => await this.transport.send({
			name: this.serviceName, 
			cmd: `${this.entityName}.update`,
		}, await this.validateUpdate({
			accessToken,
			id,
			newId,
			lensaId,
			targetId,
			source,
			candidateSource,
			customerCategory,
			fileId,
			language,
			jobTitle,
			firstName,
			email,
			state,
			city,
		})));
	}
}

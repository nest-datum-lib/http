import { Controller } from '@nestjs/common';
import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { MethodNotAllowedException } from '@nest-datum-common/exceptions';
import { TcpController } from '@nest-datum-common/controllers';
import { 
	exists as utilsCheckExists,
	strId as utilsCheckStrId,
	strDescription as utilsCheckStrDescription,
	strFilled as utilsCheckStrFilled,
	strEmail as utilsCheckStrEmail,
	str as utilsCheckStr,
} from '@nest-datum-utils/check';
import { ReportService } from './report.service';

@Controller()
export class ReportTcpController extends TcpController {
	constructor(
		protected service: ReportService,
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

	@MessagePattern({ cmd: 'report.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'report.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('report.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('report.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('report.create')
	async create(payload: object = {}) {
		return await super.create(payload);
	}

	@EventPattern('report.update')
	async update(payload: object = {}) {
		return await super.update(payload);
	}
}

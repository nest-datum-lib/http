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
		if (!utilsCheckStrId(options['reportStatusId'])) {
			throw new MethodNotAllowedException(`Property "reportStatusId" is not valid.`);
		}
		if (!utilsCheckStrId(options['contentId'])) {
			throw new MethodNotAllowedException(`Property "contentId" is not valid.`);
		}
		if (!utilsCheckStrId(options['fileId'])) {
			throw new MethodNotAllowedException(`Property "fileId" is not valid.`);
		}
		return await this.validateUpdate(options);
	}

	async validateUpdate(options) {
		const output = {};

		if (utilsCheckExists(options['userId'])) {
			if (!utilsCheckStrId(options['userId'])) {
				throw new MethodNotAllowedException(`Property "userId" is not valid.`);
			}
			output['userId'] = options['userId'];
		}
		if (utilsCheckExists(options['contentId'])) {
			if (!utilsCheckStrId(options['contentId'])) {
				throw new MethodNotAllowedException(`Property "contentId" is not valid.`);
			}
			output['contentId'] = options['contentId'];
		}
		if (!utilsCheckStrId(options['fileId'])) {
			throw new MethodNotAllowedException(`Property "fileId" is not valid.`);
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

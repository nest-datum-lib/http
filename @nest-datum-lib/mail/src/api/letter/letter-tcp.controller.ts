import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { MethodNotAllowedException } from '@nest-datum-common/exceptions';
import { TcpController } from '@nest-datum-common/controllers';
import { 
	exists as utilsCheckExists,
	strId as utilsCheckStrId,
	strName as utilsCheckStrName, 
	strDescription as utilsCheckStrDescription,
	strFilled as utilsCheckStrFilled,
	strEnvKey as utilsCheckStrEnvKey,
} from '@nest-datum-utils/check';
import { LetterService } from './letter.service';

@Controller()
export class LetterTcpController extends TcpController {
	constructor(
		protected service: LetterService,
	) {
		super();
	}

	async validateCreate(options) {
		if (!utilsCheckStrName(options['name'])) {
			throw new MethodNotAllowedException(`Property "name" is not valid.`);
		}
		if (!utilsCheckStrId(options['letterStatusId'])) {
			throw new MethodNotAllowedException(`Property "letterStatusId" is not valid.`);
		}
		if (!utilsCheckStrId(options['templateId'])) {
			throw new MethodNotAllowedException(`Property "templateId" is not valid.`);
		}
		if (!utilsCheckStrDescription(options['subject'])) {
			throw new MethodNotAllowedException(`Property "subject" is not valid.`);
		}
		if (!utilsCheckStrDescription(options['textPart'])) {
			throw new MethodNotAllowedException(`Property "textPart" is not valid.`);
		}
		return await this.validateUpdate(options);
	}

	async validateUpdate(options) {
		const output = {};

		if (utilsCheckStrFilled(options['envKey'])) {
			if (!utilsCheckStrEnvKey(options['envKey'])) {
				throw new MethodNotAllowedException(`Property "envKey" is not valid.`);
			}
			output['envKey'] = options['envKey'];
		}
		if (utilsCheckExists(options['userId'])) {
			if (!utilsCheckStrId(options['userId'])) {
				throw new MethodNotAllowedException(`Property "userId" is not valid.`);
			}
			output['userId'] = options['userId'];
		}
		if (utilsCheckExists(options['templateId'])) {
			if (!utilsCheckStrId(options['templateId'])) {
				throw new MethodNotAllowedException(`Property "templateId" is not valid.`);
			}
			output['templateId'] = options['templateId'];
		}
		if (utilsCheckExists(options['letterStatusId'])) {
			if (!utilsCheckStrId(options['letterStatusId'])) {
				throw new MethodNotAllowedException(`Property "letterStatusId" is not valid.`);
			}
			output['letterStatusId'] = options['letterStatusId'];
		}
		if (utilsCheckStrFilled(options['subject'])) {
			if (!utilsCheckStrDescription(options['subject'])) {
				throw new MethodNotAllowedException(`Property "subject" is not valid.`);
			}
			output['subject'] = options['subject'];
		}
		if (utilsCheckStrFilled(options['textPart'])) {
			if (!utilsCheckStrDescription(options['textPart'])) {
				throw new MethodNotAllowedException(`Property "textPart" is not valid.`);
			}
			output['textPart'] = options['textPart'];
		}
		if (utilsCheckExists(options['name'])) {
			if (!utilsCheckStrName(options['name'])) {
				throw new MethodNotAllowedException(`Property "name" is not valid.`);
			}
			output['name'] = options['name'];
		}
		if (utilsCheckExists(options['description'])) {
			if (!utilsCheckStrDescription(options['description'])) {
				throw new MethodNotAllowedException(`Property "description" is not valid.`);
			}
			output['description'] = options['description'];
		}
		return {
			...await super.validateUpdate(options),
			...output,
		};
	}

	@MessagePattern({ cmd: 'letter.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'letter.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('letter.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('letter.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('letter.create')
	async create(payload) {
		return await super.create(payload);
	}

	@EventPattern('letter.update')
	async update(payload: object = {}) {
		return await super.update(payload);
	}
}
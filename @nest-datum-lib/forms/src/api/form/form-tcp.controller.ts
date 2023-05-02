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
import { FormService } from './form.service';

@Controller()
export class FormTcpController extends TcpController {
	constructor(
		protected service: FormService,
	) {
		super();
	}

	async validateCreate(options) {
		if (!utilsCheckStrName(options['name'])) {
			throw new MethodNotAllowedException(`Property "name" is not valid.`);
		}
		if (!utilsCheckStrId(options['formStatusId'])) {
			throw new MethodNotAllowedException(`Property "formStatusId" is not valid.`);
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
		if (utilsCheckExists(options['formStatusId'])) {
			if (!utilsCheckStrId(options['formStatusId'])) {
				throw new MethodNotAllowedException(`Property "formStatusId" is not valid.`);
			}
			output['formStatusId'] = options['formStatusId'];
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

	@MessagePattern({ cmd: 'form.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'form.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('form.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('form.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('form.create')
	async create(payload) {
		return await super.create(payload);
	}

	@EventPattern('form.update')
	async update(payload: object = {}) {
		return await super.update(payload);
	}
}
import { 
	Post,
	Patch,
	Body,
	Param,
} from '@nestjs/common';
import { MethodNotAllowedException } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { AccessToken } from '@nest-datum-common/decorators';
import { BindHttpController } from '@nest-datum/bind';
import { exists as utilsCheckExists } from '@nest-datum-utils/check';
import { FieldContentService } from './field-content.service';

@Controller(`${process.env.SERVICE_FORMS}/field/content`)
export class FieldContentHttpController extends BindHttpController {
	protected readonly mainRelationColumnName: string = 'contentId';
	protected readonly optionRelationColumnName: string = 'fieldId';
	
	constructor(
		protected service: FieldContentService,
	) {
		super();
	}

	async validateCreate(options) {
		if (!utilsCheckExists(options['value'])) {
			throw new MethodNotAllowedException(`Property "value" is not valid.`);
		}
		return {
			value: options['value'],
			...await super.validateCreate(options),
		};
	}

	@Post(':id')
	async create(
		@AccessToken() accessToken: string,
		@Param('id') entityId: string,
		@Body('fieldId') fieldId,
		@Body('value') value,
	) {
		return await this.serviceHandlerWrapper(async () => await this.transport.send({
			name: this.serviceName, 
			cmd: `${this.entityName}.create`,
		}, await this.validateCreate({
			accessToken,
			value,
			[this.mainRelationColumnName]: entityId,
			[this.optionRelationColumnName]: fieldId,
		})));
	}
}

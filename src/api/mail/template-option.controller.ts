import { Controller } from '@nestjs/common';
import { OptionHttpTcpController } from '@nest-datum/option';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_MAIL}/template-option`)
export class TemplateOptionController extends OptionHttpTcpController {
	protected serviceName = process.env.SERVICE_MAIL;
	protected entityName = 'templateOption';

	constructor(
		protected transportService: TransportService,
	) {
		super();
	}
}

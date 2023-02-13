import { Controller } from '@nestjs/common';
import { StatusHttpTcpController } from '@nest-datum/status';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_MAIL}/template-status`)
export class TemplateStatusController extends StatusHttpTcpController {
	protected serviceName = process.env.SERVICE_MAIL;
	protected entityName = 'templateStatus';

	constructor(
		protected transportService: TransportService,
	) {
		super();
	}
}

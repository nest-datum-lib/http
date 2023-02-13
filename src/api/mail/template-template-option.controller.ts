import { Controller } from '@nestjs/common';
import { HttpTcpController } from '@nest-datum/controller';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_MAIL}/template/option`)
export class TemplateTemplateOptionController extends HttpTcpController {
	protected serviceName = process.env.SERVICE_MAIL;
	protected entityName = 'templateOptionRelation';

	constructor(
		protected transportService: TransportService,
	) {
		super();
	}
}

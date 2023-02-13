import { Controller } from '@nestjs/common';
import { HttpTcpController } from '@nest-datum/controller';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_FORMS}/form/option`)
export class FormFormOptionController extends HttpTcpController {
	protected serviceName = process.env.SERVICE_FORMS;
	protected entityName = 'formOptionRelation';

	constructor(
		protected transportService: TransportService,
	) {
		super();
	}
}

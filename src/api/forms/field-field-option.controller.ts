import { Controller } from '@nestjs/common';
import { HttpTcpController } from '@nest-datum/controller';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_FORMS}/field/option`)
export class FieldFieldOptionController extends HttpTcpController {
	protected serviceName = process.env.SERVICE_FORMS;
	protected entityName = 'fieldOptionRelation';

	constructor(
		protected transportService: TransportService,
	) {
		super();
	}
}

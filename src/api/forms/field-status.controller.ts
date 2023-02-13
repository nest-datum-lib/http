import { Controller } from '@nestjs/common';
import { StatusHttpTcpController } from '@nest-datum/status';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_FORMS}/field-status`)
export class FieldStatusController extends StatusHttpTcpController {
	protected serviceName = process.env.SERVICE_FORMS;
	protected entityName = 'fieldStatus';

	constructor(
		protected transportService: TransportService,
	) {
		super();
	}
}

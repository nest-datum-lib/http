import { Controller } from '@nestjs/common';
import { StatusHttpTcpController } from '@nest-datum/status';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_FORMS}/form-status`)
export class FormStatusController extends StatusHttpTcpController {
	protected serviceName = process.env.SERVICE_FORMS;
	protected entityName = 'formStatus';

	constructor(
		protected transportService: TransportService,
	) {
		super();
	}
}

import { Controller } from '@nestjs/common';
import { StatusHttpTcpController } from '@nest-datum/status';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_FORMS}/content-status`)
export class ContentStatusController extends StatusHttpTcpController {
	protected serviceName = process.env.SERVICE_FORMS;
	protected entityName = 'contentStatus';

	constructor(
		protected transportService: TransportService,
	) {
		super();
	}
}

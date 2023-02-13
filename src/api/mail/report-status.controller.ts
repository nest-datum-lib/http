import { Controller } from '@nestjs/common';
import { StatusHttpTcpController } from '@nest-datum/status';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_MAIL}/report-status`)
export class ReportStatusController extends StatusHttpTcpController {
	protected serviceName = process.env.SERVICE_MAIL;
	protected entityName = 'reportStatus';

	constructor(
		protected transportService: TransportService,
	) {
		super();
	}
}

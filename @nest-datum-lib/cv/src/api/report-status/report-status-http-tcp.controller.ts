import { Controller } from '@nestjs/common';
import { StatusHttpTcpController } from '@nest-datum/status';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_CV}/report-status`)
export class ReportStatusHttpTcpController extends StatusHttpTcpController {
	protected serviceName = process.env.SERVICE_CV;
	protected readonly entityName: string = 'reportStatus';

	constructor(
		protected transport: TransportService,
	) {
		super();
	}
}
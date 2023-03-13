import { Controller } from '@nestjs/common';
import { StatusHttpTcpController } from '@nest-datum/status';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_DATA_TYPE}/access-status`)
export class AccessStatusController extends StatusHttpTcpController {
	protected serviceName = process.env.SERVICE_DATA_TYPE;
	protected entityName = 'accessStatus';

	constructor(
		protected transportService: TransportService,
	) {
		super();
	}
}

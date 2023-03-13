import { Controller } from '@nestjs/common';
import { AccessStatusHttpTcpController } from '@nest-datum/access';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_DATA_TYPE}/access-status`)
export class AccessStatusController extends AccessStatusHttpTcpController {
	protected serviceName = process.env.SERVICE_DATA_TYPE;

	constructor(
		protected transportService: TransportService,
	) {
		super();
	}
}

import { Controller } from '@nestjs/common';
import { TransportService } from '@nest-datum/transport';
import { AccessHttpTcpController } from '@nest-datum/access';

@Controller(`${process.env.SERVICE_DATA_TYPE}/access`)
export class AccessController extends AccessHttpTcpController {
	protected serviceName = process.env.SERVICE_DATA_TYPE;
	
	constructor(
		protected transportService: TransportService,
	) {
		super();
	}
}

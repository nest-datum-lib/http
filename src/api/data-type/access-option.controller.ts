import { Controller } from '@nestjs/common';
import { AccessOptionHttpTcpController } from '@nest-datum/access';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_DATA_TYPE}/access-option`)
export class AccessOptionController extends AccessOptionHttpTcpController {
	protected serviceName = process.env.SERVICE_DATA_TYPE;

	constructor(
		protected transportService: TransportService,
	) {
		super();
	}
}

import { Controller } from '@nestjs/common';
import { AccessAccessOptionHttpTcpController } from '@nest-datum/access';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_DATA_TYPE}/access/option`)
export class AccessAccessOptionController extends AccessAccessOptionHttpTcpController {
	protected serviceName = process.env.SERVICE_DATA_TYPE;

	constructor(
		protected transportService: TransportService,
	) {
		super();
	}
}

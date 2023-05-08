import { Controller } from '@nestjs/common';
import { AccessOptionHttpTcpController as AccessOptionHttpTcpControllerBase } from '@nest-datum/access';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_LENSA}/access-option`)
export class AccessOptionHttpTcpController extends AccessOptionHttpTcpControllerBase {
	protected serviceName = process.env.SERVICE_LENSA;

	constructor(
		protected transport: TransportService,
	) {
		super();
	}
}

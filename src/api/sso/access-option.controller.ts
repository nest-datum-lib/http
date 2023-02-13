import { Controller } from '@nestjs/common';
import { OptionHttpTcpController } from '@nest-datum/option';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_SSO}/access-option`)
export class AccessOptionController extends OptionHttpTcpController {
	protected serviceName = process.env.SERVICE_SSO;
	protected entityName = 'accessOption';

	constructor(
		protected transportService: TransportService,
	) {
		super();
	}
}

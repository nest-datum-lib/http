import { Controller } from '@nestjs/common';
import { OptionHttpTcpController } from '@nest-datum/option';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_DATA_TYPE}/access-option`)
export class AccessOptionController extends OptionHttpTcpController {
	protected serviceName = process.env.SERVICE_DATA_TYPE;
	protected entityName = 'accessOption';

	constructor(
		protected transportService: TransportService,
	) {
		super();
	}
}

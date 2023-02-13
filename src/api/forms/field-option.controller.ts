import { Controller } from '@nestjs/common';
import { OptionHttpTcpController } from '@nest-datum/option';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_FORMS}/field-option`)
export class FieldOptionController extends OptionHttpTcpController {
	protected serviceName = process.env.SERVICE_FORMS;
	protected entityName = 'fieldOption';

	constructor(
		protected transportService: TransportService,
	) {
		super();
	}
}

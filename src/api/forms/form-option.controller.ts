import { Controller } from '@nestjs/common';
import { OptionHttpTcpController } from '@nest-datum/option';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_FORMS}/form-option`)
export class FormOptionController extends OptionHttpTcpController {
	protected serviceName = process.env.SERVICE_FORMS;
	protected entityName = 'formOption';

	constructor(
		protected transportService: TransportService,
	) {
		super();
	}
}

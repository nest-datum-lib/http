import { Controller } from '@nestjs/common';
import { HttpTcpController } from '@nest-datum/controller';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_FORMS}/form/field`)
export class FormFieldController extends HttpTcpController {
	protected serviceName = process.env.SERVICE_FORMS;
	protected entityName = 'formField';

	constructor(
		protected transportService: TransportService,
	) {
		super();
	}
}

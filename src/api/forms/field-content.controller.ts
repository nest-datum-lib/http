import { Controller } from '@nestjs/common';
import { HttpTcpController } from '@nest-datum/controller';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_FORMS}/content/field`)
export class FieldContentController extends HttpTcpController {
	protected serviceName = process.env.SERVICE_SSO;
	protected entityName = 'fieldContent';

	constructor(
		protected transportService: TransportService,
	) {
		super();
	}
}

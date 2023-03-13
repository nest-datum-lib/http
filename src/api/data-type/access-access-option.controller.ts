import { Controller } from '@nestjs/common';
import { HttpTcpController } from '@nest-datum/controller';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_DATA_TYPE}/access/option`)
export class AccessAccessOptionController extends HttpTcpController {
	protected serviceName = process.env.SERVICE_DATA_TYPE;
	protected entityName = 'accessOptionRelation';

	constructor(
		protected transportService: TransportService,
	) {
		super();
	}
}

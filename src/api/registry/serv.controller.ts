import { Controller } from '@nestjs/common';
import { HttpTcpController } from '@nest-datum/controller';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_REGISTRY}/serv`)
export class ServController extends HttpTcpController {
	protected serviceName = process.env.SERVICE_REGISTRY;
	protected entityName = 'registry';

	constructor(
		protected transportService: TransportService,
	) {
		super();
	}
}

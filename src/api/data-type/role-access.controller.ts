import { Controller } from '@nestjs/common';
import { HttpTcpController } from '@nest-datum/controller';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_DATA_TYPE}/role/access`)
export class RoleAccessController extends HttpTcpController {
	protected serviceName = process.env.SERVICE_DATA_TYPE;
	protected entityName = 'roleAccess';

	constructor(
		protected transportService: TransportService,
	) {
		super();
	}
}

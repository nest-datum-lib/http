import { Controller } from '@nestjs/common';
import { HttpTcpController } from '@nest-datum/controller';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_SSO}/role/access`)
export class RoleAccessController extends HttpTcpController {
	protected serviceName = process.env.SERVICE_SSO;
	protected entityName = 'roleAccess';

	constructor(
		protected transportService: TransportService,
	) {
		super();
	}
}

import { Controller } from '@nestjs/common';
import { RoleAccessHttpTcpController } from '@nest-datum/access';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_DATA_TYPE}/role/access`)
export class RoleAccessController extends RoleAccessHttpTcpController {
	protected serviceName = process.env.SERVICE_DATA_TYPE;

	constructor(
		protected transportService: TransportService,
	) {
		super();
	}
}

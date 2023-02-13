import { Controller } from '@nestjs/common';
import { SettingHttpTcpController } from '@nest-datum/setting';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_LENSA}/setting`)
export class SettingController extends SettingHttpTcpController {
	protected serviceName = process.env.SERVICE_LENSA;

	constructor(
		protected transportService: TransportService,
	) {
		super();
	}
}

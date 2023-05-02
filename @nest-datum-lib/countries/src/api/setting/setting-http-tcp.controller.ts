import { Controller } from '@nestjs/common';
import { TransportService } from '@nest-datum/transport';
import { SettingHttpTcpController as SettingHttpTcpControllerBase } from '@nest-datum/setting';

@Controller(`${process.env.SERVICE_COUNTRIES}/setting`)
export class SettingHttpTcpController extends SettingHttpTcpControllerBase {
	protected readonly serviceName: string = process.env.SERVICE_COUNTRIES;

	constructor(
		protected transport: TransportService,
	) {
		super();
	}
}
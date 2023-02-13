import { Controller } from '@nestjs/common';
import { TransportService } from '@nest-datum/transport';
import { SettingHttpController } from '@nest-datum/setting';
import { SettingService } from './setting.service';

@Controller(`${process.env.SERVICE_HTTP}/setting`)
export class SettingController extends SettingHttpController {
	constructor(
		protected transportService: TransportService,
		protected entityService: SettingService,
	) {
		super();
	}
}

import { Controller } from '@nestjs/common';
import { SettingHttpController } from '@nest-datum/setting-http';
import { SettingService } from './setting.service';

@Controller(`/setting`)
export class SettingController extends SettingHttpController {
	constructor(
		public readonly service: SettingService,
	) {
		super();
	}
}

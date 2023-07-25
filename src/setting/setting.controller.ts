import { Controller } from '@nestjs/common';
import { SqlSettingController } from '@nest-datum/sql-setting';
import { SettingService } from './setting.service';

@Controller(`/setting`)
export class SettingController extends SqlSettingController {
	constructor(
		protected readonly service: SettingService,
	) {
		super();
	}
}

import { Controller } from '@nestjs/common';
import { SqlSettingController } from '@nest-datum/sql-setting';

@Controller(`/setting`)
export class SettingController extends SqlSettingController {
}

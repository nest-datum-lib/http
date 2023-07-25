import { Controller } from '@nestjs/common';
import { SqlStatusController } from '@nest-datum/sql-status';

@Controller(`/route-status`)
export class RouteStatusController extends SqlStatusController {
}

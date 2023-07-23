import { Controller } from '@nestjs/common';
import { SqlModelController } from '@nest-datum/sql-model';

@Controller(`/route`)
export class RouteController extends SqlModelController {
}

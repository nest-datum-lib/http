import { Mixin } from 'ts-mixer';
import { SqlModelService } from '@nest-datum/sql-model';
import { SqlModelEnvService } from '@nest-datum/sql-model-env';
import { SqlModelRemovableService } from '@nest-datum/sql-model-removable';
import { SqlModelStatusService } from '@nest-datum/sql-model-status';
import { SqlModelUserService } from '@nest-datum/sql-model-user';

export class RouteService extends Mixin(SqlModelService, SqlModelEnvService, SqlModelRemovableService, SqlModelStatusService, SqlModelUserService) {
}

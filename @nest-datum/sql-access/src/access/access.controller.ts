import { Mixin } from 'ts-mixer';
import { SqlModelController } from '@nest-datum/sql-model';
import { SqlModelEnvController } from '@nest-datum/sql-model-env';
import { SqlModelRemovableController } from '@nest-datum/sql-model-removable';
import { SqlModelStatusController } from '@nest-datum/sql-model-status';
import { SqlModelUserController } from '@nest-datum/sql-model-user';

export class AccessController extends Mixin(SqlModelController, SqlModelEnvController, SqlModelRemovableController, SqlModelStatusController, SqlModelUserController) {
}

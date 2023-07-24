import { SqlModelController } from '@nest-datum/sql-model';
import { SqlModelEnvController } from '@nest-datum/sql-model-env';
import { SqlModelRemovableController } from '@nest-datum/sql-model-removable';
import { SqlModelUserController } from '@nest-datum/sql-model-user';
import { extender } from '@nest-datum-utils/extender';

const SqlModelControllerExtends = extender(SqlModelController, [ 
	SqlModelEnvController, 
	SqlModelRemovableController, 
	SqlModelUserController, 
]);

export class SqlStatusController extends SqlModelControllerExtends {
}

import { SqlModelController } from '@nest-datum/sql-model';
import { SqlModelEnvController } from '@nest-datum/sql-model-env';
import { SqlModelRemovableController } from '@nest-datum/sql-model-removable';
import { SqlModelStatusController } from '@nest-datum/sql-model-status';
import { SqlModelUserController } from '@nest-datum/sql-model-user';
import { extender } from '@nest-datum-utils/extender';

const SqlModelControllerExtends = extender(SqlModelController, [ 
	SqlModelEnvController, 
	SqlModelRemovableController, 
	SqlModelStatusController, 
	SqlModelUserController, 
]);

export class SqlFilesystemController extends SqlModelControllerExtends {
}

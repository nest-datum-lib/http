import { SqlModelController } from '@nest-datum/sql-model';
import { SqlModelEnvController } from '@nest-datum/sql-model-env';
import { SqlModelDataTypeController } from '@nest-datum/sql-model-data-type';
import { SqlModelRemovableController } from '@nest-datum/sql-model-removable';
import { SqlModelUserController } from '@nest-datum/sql-model-user';
import { extender } from '@nest-datum-utils/extender';

const SqlModelControllerExtends = extender(SqlModelController, [ 
	SqlModelEnvController, 
	SqlModelDataTypeController,
	SqlModelRemovableController, 
	SqlModelUserController, 
]);

export class SqlSettingController extends SqlModelControllerExtends {
}

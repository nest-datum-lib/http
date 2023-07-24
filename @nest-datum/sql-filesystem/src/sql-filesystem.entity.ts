import { SqlModelEntity } from '@nest-datum/sql-model';
import { SqlModelEnvEntity } from '@nest-datum/sql-model-env';
import { SqlModelRemovableEntity } from '@nest-datum/sql-model-removable';
import { SqlModelStatusEntity } from '@nest-datum/sql-model-status';
import { SqlModelUserEntity } from '@nest-datum/sql-model-user';
import { extender } from '@nest-datum-utils/extender';

const SqlModelEntityExtends = extender(SqlModelEntity, [ 
	SqlModelEnvEntity, 
	SqlModelRemovableEntity, 
	SqlModelStatusEntity, 
	SqlModelUserEntity, 
]);

export class SqlFilesystemEntity extends SqlModelEntityExtends {
}

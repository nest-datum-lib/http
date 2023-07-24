import { SqlModelModule } from '@nest-datum/sql-model';
import { SqlModelEnvModule } from '@nest-datum/sql-model-env';
import { SqlModelRemovableModule } from '@nest-datum/sql-model-removable';
import { SqlModelStatusModule } from '@nest-datum/sql-model-status';
import { SqlModelUserModule } from '@nest-datum/sql-model-user';
import { extender } from '@nest-datum-utils/extender';

const SqlModelModuleExtends = extender(SqlModelModule, [ 
	SqlModelEnvModule, 
	SqlModelRemovableModule, 
	SqlModelStatusModule, 
	SqlModelUserModule, 
]);

export class SqlQueueModule extends SqlModelModuleExtends {
}

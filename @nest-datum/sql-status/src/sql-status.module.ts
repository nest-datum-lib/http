import { SqlModelModule } from '@nest-datum/sql-model';
import { SqlModelEnvModule } from '@nest-datum/sql-model-env';
import { SqlModelRemovableModule } from '@nest-datum/sql-model-removable';
import { SqlModelUserModule } from '@nest-datum/sql-model-user';
import { extender } from '@nest-datum-utils/extender';

const SqlModelModuleExtends = extender(SqlModelModule, [ 
	SqlModelEnvModule, 
	SqlModelRemovableModule, 
	SqlModelUserModule, 
]);

export class SqlStatusModule extends SqlModelModuleExtends {
}

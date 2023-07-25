import { SqlModelService } from '@nest-datum/sql-model';
import { SqlModelEnvService } from '@nest-datum/sql-model-env';
import { SqlModelDataTypeService } from '@nest-datum/sql-model-data-type';
import { SqlModelRemovableService } from '@nest-datum/sql-model-removable';
import { SqlModelUserService } from '@nest-datum/sql-model-user';
import { extender } from '@nest-datum-utils/extender';

const SqlModelServiceExtends = extender(SqlModelService, [ 
	SqlModelEnvService, 
	SqlModelDataTypeService,
	SqlModelRemovableService,
	SqlModelUserService, 
]);

export class SqlSettingService extends SqlModelServiceExtends {
}

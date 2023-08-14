import { ModelSqlService } from '@nest-datum/model-sql';
import { ModelSqlEnvService } from '@nest-datum/model-sql-env';
import { ModelSqlNameService } from '@nest-datum/model-sql-name';
import { ModelSqlDescriptionService } from '@nest-datum/model-sql-description';
import { ModelSqlCreatorService } from '@nest-datum/model-sql-creator';
import { ModelSqlDataTypeService } from '@nest-datum/model-sql-data-type';
import { ModelSqlDataValueService } from '@nest-datum/model-sql-data-value';
import { ModelSqlRemovableService } from '@nest-datum/model-sql-removable';
import { ModelSqlDatesService } from '@nest-datum/model-sql-dates';
import { ModelSqlAccessService } from '@nest-datum/model-sql-access';
import { SettingService } from '@nest-datum/setting';

export class SettingSqlService extends SettingService(ModelSqlAccessService(ModelSqlDatesService(ModelSqlRemovableService(ModelSqlEnvService(ModelSqlDataTypeService(ModelSqlDataValueService(ModelSqlCreatorService(ModelSqlDescriptionService(ModelSqlNameService(ModelSqlService())))))))))) {
}

import { Mixin } from 'ts-mixer';
import { ModelSqlService } from '@nest-datum/model';
import { ModelTokenSqlService } from '@nest-datum/model-token';
import { ModelEnvSqlService } from '@nest-datum/model-env';
import { ModelUserSqlService } from '@nest-datum/model-user';
import { ModelDataTypeService } from '@nest-datum/model-data-type';
import { ModelDataValueService } from '@nest-datum/model-data-value';
import { ModelRemovableTokenSqlService } from '@nest-datum/model-removable-token';
import { ModelDatesSqlService } from '@nest-datum/model-dates';
import { SettingService } from './setting.service';

export class SettingSqlService extends Mixin(ModelSqlService, ModelTokenSqlService, ModelEnvSqlService, ModelUserSqlService, ModelDataTypeService, ModelDataValueService, ModelRemovableTokenSqlService, ModelDatesSqlService, SettingService) {
}

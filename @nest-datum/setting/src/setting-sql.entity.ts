import { ModelSql } from '@nest-datum/model';
import { ModelTokenSql } from '@nest-datum/model-token';
import { ModelEnvSql } from '@nest-datum/model-env';
import { ModelUserSql } from '@nest-datum/model-user';
import { ModelDataTypeSql } from '@nest-datum/model-data-type';
import { ModelDataValueSql } from '@nest-datum/model-data-value';
import { ModelRemovableSql } from '@nest-datum/model-removable';
import { ModelDatesSql } from '@nest-datum/model-dates';

export class SettingSql extends ModelSql(ModelTokenSql(ModelEnvSql(ModelUserSql(ModelDataTypeSql(ModelDataValueSql(ModelRemovableSql(ModelDatesSql()))))))) {
}

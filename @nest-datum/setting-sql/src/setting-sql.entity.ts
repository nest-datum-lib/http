import { ModelSql } from '@nest-datum/model-sql';
import { ModelSqlEnv } from '@nest-datum/model-sql-env';
import { ModelSqlName } from '@nest-datum/model-sql-name';
import { ModelSqlDescription } from '@nest-datum/model-sql-description';
import { ModelSqlCreator } from '@nest-datum/model-sql-creator';
import { ModelSqlDataType } from '@nest-datum/model-sql-data-type';
import { ModelSqlDataValue } from '@nest-datum/model-sql-data-value';
import { ModelSqlRemovable } from '@nest-datum/model-sql-removable';
import { ModelSqlDates } from '@nest-datum/model-sql-dates';
import { ModelSqlAccess } from '@nest-datum/model-sql-access';

export class SettingSql extends ModelSql(ModelSqlAccess(ModelSqlEnv(ModelSqlDescription(ModelSqlName(ModelSqlCreator(ModelSqlDataType(ModelSqlDataValue(ModelSqlRemovable(ModelSqlDates()))))))))) {
}

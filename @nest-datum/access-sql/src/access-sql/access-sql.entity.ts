import { ModelSql } from '@nest-datum/model-sql';
import { ModelSqlEnv } from '@nest-datum/model-sql-env';
import { ModelSqlName } from '@nest-datum/model-sql-name';
import { ModelSqlDescription } from '@nest-datum/model-sql-description';
import { ModelSqlCreator } from '@nest-datum/model-sql-creator';
import { ModelSqlRemovable } from '@nest-datum/model-sql-removable';
import { ModelSqlDates } from '@nest-datum/model-sql-dates';
import { ModelSqlOneToMany } from '@nest-datum/model-sql-one-to-many';

export class AccessSql extends ModelSql(ModelSqlOneToMany(ModelSqlEnv(ModelSqlDescription(ModelSqlName(ModelSqlCreator(ModelSqlRemovable(ModelSqlDates()))))))) {
}

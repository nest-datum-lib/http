import { ModelSql } from '@nest-datum/model-sql';
import { ModelSqlName } from '@nest-datum/model-sql-name';
import { ModelSqlDescription } from '@nest-datum/model-sql-description';
import { ModelSqlCreator } from '@nest-datum/model-sql-creator';
import { ModelSqlRemovable } from '@nest-datum/model-sql-removable';
import { ModelSqlDates } from '@nest-datum/model-sql-dates';
import { ModelSqlOneToMany } from '@nest-datum/model-sql-one-to-many';
import { ModelSqlAccess } from '@nest-datum/model-sql-access';

export class AccessSql extends ModelSqlAccess(ModelSqlDates(ModelSqlRemovable(ModelSqlCreator(ModelSqlName(ModelSqlDescription(ModelSqlOneToMany(ModelSql()))))))) {
}

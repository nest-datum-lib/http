import { 
	Column,
	ManyToOne,
} from 'typeorm';
import { ModelSql } from '@nest-datum/model-sql';
import { ModelSqlCreator } from '@nest-datum/model-sql-creator';
import { ModelSqlDates } from '@nest-datum/model-sql-dates';
import { ModelSqlManyToOne } from '@nest-datum/model-sql-many-to-one';
import { ModelSqlAccess } from '@nest-datum/model-sql-access';

export class AccessSqlRole extends ModelSqlAccess(ModelSqlDates(ModelSqlCreator(ModelSqlManyToOne(ModelSql())))) {
}

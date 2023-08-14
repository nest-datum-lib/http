import { 
	Column,
	ManyToOne,
} from 'typeorm';
import { ModelSql } from '@nest-datum/model-sql';
import { ModelSqlCreator } from '@nest-datum/model-sql-creator';
import { ModelSqlDates } from '@nest-datum/model-sql-dates';
import { ModelSqlManyToOne } from '@nest-datum/model-sql-many-to-one';

export class AccessSqlRole extends ModelSqlDates(ModelSqlCreator(ModelSqlManyToOne(ModelSql()))) {
}

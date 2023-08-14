import { ModelSqlService } from '@nest-datum/model-sql';
import { ModelSqlCreatorService } from '@nest-datum/model-sql-creator';
import { ModelSqlDatesService } from '@nest-datum/model-sql-dates';
import { ModelSqlManyToOneService } from '@nest-datum/model-sql-many-to-one';
import { AccessService } from '@nest-datum/access';

export class AccessSqlRoleService extends AccessService(ModelSqlDatesService(ModelSqlCreatorService(ModelSqlManyToOneService(ModelSqlService())))) {
}

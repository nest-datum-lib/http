import { ModelSqlService } from '@nest-datum/model-sql';
import { ModelSqlEnvService } from '@nest-datum/model-sql-env';
import { ModelSqlNameService } from '@nest-datum/model-sql-name';
import { ModelSqlDescriptionService } from '@nest-datum/model-sql-description';
import { ModelSqlCreatorService } from '@nest-datum/model-sql-creator';
import { ModelSqlRemovableService } from '@nest-datum/model-sql-removable';
import { ModelSqlDatesService } from '@nest-datum/model-sql-dates';
import { ModelSqlOneToManyService } from '@nest-datum/model-sql-one-to-many';
import { AccessService } from '@nest-datum/access';

export class AccessSqlService extends AccessService(ModelSqlDatesService(ModelSqlRemovableService(ModelSqlEnvService(ModelSqlCreatorService(ModelSqlDescriptionService(ModelSqlNameService(ModelSqlOneToManyService(ModelSqlService())))))))) {
}

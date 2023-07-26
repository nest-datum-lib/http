import { Mixin } from 'ts-mixer';
import { ModelSqlService } from '@nest-datum/model';
import { ModelDatesService } from './model-dates.service';

export class ModelDatesSqlService extends Mixin(ModelSqlService, ModelDatesService) {
}

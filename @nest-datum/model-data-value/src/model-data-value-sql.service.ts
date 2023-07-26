import { Mixin } from 'ts-mixer';
import { ModelSqlService } from '@nest-datum/model';
import { ModelDataValueService } from './model-data-value.service';

export class ModelDataValueSqlService extends Mixin(ModelSqlService, ModelDataValueService) {
}

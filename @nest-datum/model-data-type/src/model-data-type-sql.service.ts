import { Mixin } from 'ts-mixer';
import { ModelSqlService } from '@nest-datum/model';
import { ModelDataTypeService } from './model-data-type.service';

export class ModelDataTypeSqlService extends Mixin(ModelSqlService, ModelDataTypeService) {
}

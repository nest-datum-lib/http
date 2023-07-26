import { Mixin } from 'ts-mixer';
import { ModelSqlService } from '@nest-datum/model';
import { ModelEnvService } from './model-env.service';

export class ModelEnvSqlService extends Mixin(ModelSqlService, ModelEnvService) {
}

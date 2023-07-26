import { Mixin } from 'ts-mixer';
import { ModelSqlService } from '@nest-datum/model';
import { ModelStatusService } from './model-status.service';

export class ModelStatusSqlService extends Mixin(ModelSqlService, ModelStatusService) {
}

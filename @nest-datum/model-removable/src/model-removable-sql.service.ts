import { Mixin } from 'ts-mixer';
import { ModelSqlService } from '@nest-datum/model';
import { ModelRemovableService } from './model-removable.service';

export class ModelRemovableSqlService extends Mixin(ModelSqlService, ModelRemovableService) {
}

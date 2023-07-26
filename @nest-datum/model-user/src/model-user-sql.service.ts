import { Mixin } from 'ts-mixer';
import { ModelSqlService } from '@nest-datum/model';
import { ModelUserService } from './model-user.service';

export class ModelUserSqlService extends Mixin(ModelSqlService, ModelUserService) {
}

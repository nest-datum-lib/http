import { Mixin } from 'ts-mixer';
import { ModelRemovableSqlService } from '@nest-datum/model-removable';
import { ModelRemovableTokenService } from './model-removable-token.service';

export class ModelRemovableTokenSqlService extends Mixin(ModelRemovableSqlService, ModelRemovableTokenService) {
}

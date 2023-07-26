import { Mixin } from 'ts-mixer';
import { ModelSqlService } from '@nest-datum/model';
import { ModelTokenService } from './model-token.service';

export class ModelTokenSqlService extends Mixin(ModelSqlService, ModelTokenService) {
}

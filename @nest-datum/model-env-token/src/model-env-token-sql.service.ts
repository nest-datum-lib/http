import { Mixin } from 'ts-mixer';
import { ModelEnvSqlService } from '@nest-datum/model-env';
import { ModelEnvTokenService } from './model-env-token.service';

export class ModelEnvTokenSqlService extends Mixin(ModelEnvSqlService, ModelEnvTokenService) {
}

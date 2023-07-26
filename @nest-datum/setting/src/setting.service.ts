import { Mixin } from 'ts-mixer';
import { ModelService } from '@nest-datum/model';
import { ModelTokenService } from '@nest-datum/model-token';
import { ModelEnvService } from '@nest-datum/model-env';
import { ModelUserService } from '@nest-datum/model-user';
import { ModelRemovableTokenService } from '@nest-datum/model-removable-token';
import { ModelDatesService } from '@nest-datum/model-dates';

export class SettingService extends Mixin(ModelService, ModelTokenService, ModelEnvService, ModelUserService, ModelRemovableTokenService, ModelDatesService) {
}

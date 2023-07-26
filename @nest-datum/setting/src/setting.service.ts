import { Mixin } from 'ts-mixer';
import { ModelService } from '@nest-datum/model';
import { ModelTokenService } from '@nest-datum/model-token';
import { ModelEnvService } from '@nest-datum/model-env';
import { ModelUserService } from '@nest-datum/model-user';
import { ModelRemovableService } from '@nest-datum/model-removable';
import { ModelDatesService } from '@nest-datum/model-dates';

export class SettingService extends Mixin(ModelService, ModelTokenService, ModelEnvService, ModelUserService, ModelRemovableService, ModelDatesService) {
}

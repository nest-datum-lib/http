import { Mixin } from 'ts-mixer';
import { ModelController } from '@nest-datum/model';
import { ModelTokenController } from '@nest-datum/model-token';
import { ModelEnvController } from '@nest-datum/model-env';
import { ModelUserController } from '@nest-datum/model-user';
import { ModelRemovableTokenController } from '@nest-datum/model-removable-token';
import { ModelDatesController } from '@nest-datum/model-dates';

export class SettingController extends Mixin(ModelController, ModelTokenController, ModelEnvController, ModelUserController, ModelRemovableTokenController, ModelDatesController) {
}

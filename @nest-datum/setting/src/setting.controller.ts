import { Mixin } from 'ts-mixer';
import { ModelController } from '@nest-datum/model';
import { ModelTokenController } from '@nest-datum/model-token';
import { ModelEnvTokenController } from '@nest-datum/model-env-token';
import { ModelUserController } from '@nest-datum/model-user';
import { ModelDataTypeController } from '@nest-datum/model-data-type';
import { ModelDataValueController } from '@nest-datum/model-data-value';
import { ModelRemovableTokenController } from '@nest-datum/model-removable-token';
import { ModelDatesController } from '@nest-datum/model-dates';

export class SettingController extends Mixin(ModelController, ModelTokenController, ModelEnvTokenController, ModelUserController, ModelDataTypeController, ModelDataValueController, ModelRemovableTokenController, ModelDatesController) {
}

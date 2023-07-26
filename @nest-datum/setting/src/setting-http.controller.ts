import { Mixin } from 'ts-mixer';
import { ModelHttpController } from '@nest-datum/model';
import { ModelTokenHttpController } from '@nest-datum/model-token';
import { ModelEnvHttpController } from '@nest-datum/model-env';
import { ModelUserHttpController } from '@nest-datum/model-user';
import { ModelRemovableHttpController } from '@nest-datum/model-removable';
import { ModelDatesHttpController } from '@nest-datum/model-dates';
import { SettingController } from './setting.controller';

export class SettingHttpController extends Mixin(SettingController, ModelHttpController, ModelTokenHttpController, ModelEnvHttpController, ModelUserHttpController, ModelRemovableHttpController, ModelDatesHttpController) {
}

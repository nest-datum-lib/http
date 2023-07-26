import { Mixin } from 'ts-mixer';
import { ModelModule } from '@nest-datum/model';
import { ModelTokenModule } from '@nest-datum/model-token';
import { ModelEnvModule } from '@nest-datum/model-env';
import { ModelUserModule } from '@nest-datum/model-user';
import { ModelRemovableTokenModule } from '@nest-datum/model-removable-token';
import { ModelDatesModule } from '@nest-datum/model-dates';

export class SettingModule extends Mixin(ModelModule, ModelTokenModule, ModelEnvModule, ModelUserModule, ModelRemovableTokenModule, ModelDatesModule) {
}

import { ModelHttpController } from '@nest-datum/model';
import { ModelTokenHttpController } from '@nest-datum/model-token';
import { ModelEnvTokenHttpController } from '@nest-datum/model-env-token';
import { ModelUserHttpController } from '@nest-datum/model-user';
import { ModelDataTypeHttpController } from '@nest-datum/model-data-type';
import { ModelDataValueHttpController } from '@nest-datum/model-data-value';
import { ModelRemovableTokenHttpController } from '@nest-datum/model-removable-token';
import { ModelDatesHttpController } from '@nest-datum/model-dates';
import { SettingController } from './setting.controller';

export class SettingHttpController extends ModelHttpController(ModelTokenHttpController(ModelEnvTokenHttpController(ModelUserHttpController(ModelDataTypeHttpController(ModelDataValueHttpController(ModelRemovableTokenHttpController(ModelDatesHttpController(SettingController())))))))) {
}

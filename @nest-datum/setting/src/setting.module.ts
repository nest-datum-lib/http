import { ModelModule } from '@nest-datum/model';
import { ModelTokenModule } from '@nest-datum/model-token';
import { ModelEnvModule } from '@nest-datum/model-env';
import { ModelUserModule } from '@nest-datum/model-user';
import { ModelDataTypeModule } from '@nest-datum/model-data-type';
import { ModelDataValueModule } from '@nest-datum/model-data-value';
import { ModelRemovableTokenModule } from '@nest-datum/model-removable-token';
import { ModelDatesModule } from '@nest-datum/model-dates';

export class SettingModule extends ModelModule(ModelTokenModule(ModelEnvModule(ModelUserModule(ModelDataTypeModule(ModelDataValueModule(ModelRemovableTokenModule(ModelDatesModule()))))))) {
}

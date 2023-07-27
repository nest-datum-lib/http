import { ModelService } from '@nest-datum/model';
import { ModelTokenService } from '@nest-datum/model-token';
import { ModelEnvService } from '@nest-datum/model-env';
import { ModelUserService } from '@nest-datum/model-user';
import { ModelDataTypeService } from '@nest-datum/model-data-type';
import { ModelDataValueService } from '@nest-datum/model-data-value';
import { ModelRemovableTokenService } from '@nest-datum/model-removable-token';
import { ModelDatesService } from '@nest-datum/model-dates';

export class SettingService extends ModelService(ModelTokenService(ModelEnvService(ModelUserService(ModelDataTypeService(ModelDataValueService(ModelRemovableTokenService(ModelDatesService()))))))) {
}

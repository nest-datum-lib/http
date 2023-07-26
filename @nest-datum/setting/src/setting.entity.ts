import { Model } from '@nest-datum/model';
import { ModelToken } from '@nest-datum/model-token';
import { ModelEnv } from '@nest-datum/model-env';
import { ModelUser } from '@nest-datum/model-user';
import { ModelDataType } from '@nest-datum/model-data-type';
import { ModelDataValue } from '@nest-datum/model-data-value';
import { ModelRemovable } from '@nest-datum/model-removable';
import { ModelDates } from '@nest-datum/model-dates';

export class Setting extends Model(ModelToken(ModelEnv(ModelUser(ModelDataType(ModelDataValue(ModelRemovable(ModelDates()))))))) {
}

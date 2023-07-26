import { Entity } from 'typeorm';
import { Model } from '@nest-datum/model';
import { ModelToken } from '@nest-datum/model-token';
import { ModelEnv } from '@nest-datum/model-env';
import { ModelUser } from '@nest-datum/model-user';
import { ModelRemovable } from '@nest-datum/model-removable';
import { ModelDates } from '@nest-datum/model-dates';

@Entity()
export class Setting extends Model(ModelToken(ModelEnv(ModelUser(ModelRemovable(ModelDates()))))) {
}

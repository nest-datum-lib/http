import { Mixin } from 'ts-mixer';
import { ModelHttpController } from '@nest-datum/model';
import { ModelUserController } from './model-user.controller';

export class ModelUserHttpController extends Mixin(ModelHttpController, ModelUserController) {
}

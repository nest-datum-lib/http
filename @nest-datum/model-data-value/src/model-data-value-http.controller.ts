import { Mixin } from 'ts-mixer';
import { ModelHttpController } from '@nest-datum/model';
import { ModelDataValueController } from './model-data-value.controller';

export class ModelDataValueHttpController extends Mixin(ModelHttpController, ModelDataValueController) {
}

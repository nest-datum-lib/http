import { Mixin } from 'ts-mixer';
import { ModelHttpController } from '@nest-datum/model';
import { ModelDataTypeController } from './model-data-type.controller';

export class ModelDataTypeHttpController extends Mixin(ModelHttpController, ModelDataTypeController) {
}

import { ModelHttpController } from '@nest-datum/model';
import { ModelDataTypeController } from './model-data-type.controller';

class Sample {
}

export const ModelDataTypeHttpController = (Base: any = Sample) => {
	class AbstractBase extends ModelHttpController(ModelDataTypeController(Base)) {
	}

	return AbstractBase;
}


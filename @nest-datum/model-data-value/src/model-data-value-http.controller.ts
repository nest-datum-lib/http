import { ModelHttpController } from '@nest-datum/model';
import { ModelDataValueController } from './model-data-value.controller';

class Sample {
}

export function ModelDataValueHttpController(Base: any = Sample) {
	class AbstractBase extends ModelHttpController(ModelDataValueController(Base)) {
	}

	return AbstractBase;
}

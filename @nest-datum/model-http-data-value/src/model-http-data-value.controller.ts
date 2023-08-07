import { ModelDataValueController } from '@nest-datum/model-data-value';

class Sample {
}

export function ModelHttpDataValueController(Base: any = Sample) {
	class AbstractBase extends ModelDataValueController(Base) {
	}

	return AbstractBase;
}

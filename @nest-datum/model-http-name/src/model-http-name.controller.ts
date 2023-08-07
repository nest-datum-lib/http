import { ModelNameController } from '@nest-datum/model-name';

class Sample {
}

export function ModelHttpNameController(Base: any = Sample) {
	class AbstractBase extends ModelNameController(Base) {
	}

	return AbstractBase;
}

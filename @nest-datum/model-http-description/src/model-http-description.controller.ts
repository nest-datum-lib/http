import { ModelDescriptionController } from '@nest-datum/model-description';

class Sample {
}

export function ModelHttpDescriptionController(Base: any = Sample) {
	class AbstractBase extends ModelDescriptionController(Base) {
	}

	return AbstractBase;
}

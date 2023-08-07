import { ModelTokenController } from '@nest-datum/model-token';

class Sample {
}

export function ModelHttpTokenController(Base: any = Sample) {
	class AbstractBase extends ModelTokenController(Base) {
	}

	return AbstractBase;
}

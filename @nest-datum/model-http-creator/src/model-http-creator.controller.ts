import { ModelCreatorController } from '@nest-datum/model-creator';

class Sample {
}

export function ModelHttpCreatorController(Base: any = Sample) {
	class AbstractBase extends ModelCreatorController(Base) {
	}

	return AbstractBase;
};

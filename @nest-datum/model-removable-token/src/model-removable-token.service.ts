import { ModelRemovableService } from '@nest-datum/model-removable';

class Sample {
}

export function ModelRemovableTokenService(Base: any = Sample) {
	class AbstractBase extends ModelRemovableService(Base) {
	}

	return AbstractBase;
}

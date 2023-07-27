import { ModelRemovableTokenController } from './model-removable-token.controller';

class Sample {
}

export function ModelRemovableTokenHttpController(Base: any = Sample) {
	class AbstractBase extends ModelRemovableTokenController(Base) {
	}

	return AbstractBase;
}

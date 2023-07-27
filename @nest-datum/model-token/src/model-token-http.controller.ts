import { ModelTokenController } from './model-token.controller';

class Sample {
}

export function ModelTokenHttpController(Base: any = Sample) {
	class AbstractBase extends ModelTokenController(Base) {
	}

	return AbstractBase;
}

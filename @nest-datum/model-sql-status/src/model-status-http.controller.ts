import { ModelStatusController } from './model-status.controller';

class Sample {
}

export function ModelStatusHttpController(Base: any = Sample) {
	class AbstractBase extends ModelStatusController(Base) {
	}

	return AbstractBase;
}

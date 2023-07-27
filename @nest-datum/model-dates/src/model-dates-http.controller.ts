import { ModelDatesController } from './model-dates.controller';

class Sample {
}

export function ModelDatesHttpController(Base: any = Sample) {
	class AbstractBase extends ModelDatesController(Base) {
	}

	return AbstractBase;
}

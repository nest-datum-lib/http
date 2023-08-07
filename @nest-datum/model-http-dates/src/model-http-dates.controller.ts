import { ModelDatesController } from '@nest-datum/model-dates';

class Sample {
}

export function ModelHttpDatesController(Base: any = Sample) {
	class AbstractBase extends ModelDatesController(Base) {
	}

	return AbstractBase;
}

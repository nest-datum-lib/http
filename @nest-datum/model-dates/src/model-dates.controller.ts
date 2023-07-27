import { ModelController } from '@nest-datum/model';

class Sample {
}

export function ModelDatesController(Base: any = Sample) {
	class AbstractBase extends ModelController(Base) {
	}

	return AbstractBase;
}

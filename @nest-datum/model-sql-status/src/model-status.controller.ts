import { ModelController } from '@nest-datum/model';

class Sample {
}

export function ModelStatusController(Base: any = Sample) {
	class AbstractBase extends ModelController(Base) {
	}

	return AbstractBase;
}

import { ModelService } from '@nest-datum/model';

class Sample {
}

export function ModelStatusService(Base: any = Sample) {
	class AbstractBase extends ModelService(Base) {
	}

	return AbstractBase;
}

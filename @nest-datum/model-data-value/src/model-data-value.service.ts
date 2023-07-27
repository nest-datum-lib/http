import { ModelService } from '@nest-datum/model';

class Sample {
}

export function ModelDataValueService(Base: any = Sample) {
	class AbstractBase extends ModelService(Base) {
	}

	return AbstractBase;
}

import { ModelService } from '@nest-datum/model';

class Sample {
}

export function ModelDataTypeService(Base: any = Sample) {
	class AbstractBase extends ModelService(Base) {
	}

	return AbstractBase;
}

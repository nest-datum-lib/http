import { ModelDataTypeController } from '@nest-datum/model-data-type';

class Sample {
}

export const ModelHttpDataTypeController = (Base: any = Sample) => {
	class AbstractBase extends ModelDataTypeController(Base) {
	}

	return AbstractBase;
}


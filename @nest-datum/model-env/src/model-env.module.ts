import { ModelModule } from '@nest-datum/model';

class Sample {
}

export function ModelEnvModule(Base: any = Sample) {
	class AbstractBase extends ModelModule(Base) {
	}

	return AbstractBase;
}

import { ModelEnvModule } from '@nest-datum/model-env';

class Sample {
}

export function ModelEnvTokenModule(Base: any = Sample) {
	class AbstractBase extends ModelEnvModule(Base) {
	}

	return AbstractBase;
}

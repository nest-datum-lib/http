import { ModelEnvService } from '@nest-datum/model-env';

class Sample {
}

export function ModelEnvTokenService(Base: any = Sample) {
	class AbstractBase extends ModelEnvService(Base) {
	}

	return AbstractBase;
}

import { ModelEnvTokenController } from './model-env-token.controller';

class Sample {
}

export function ModelEnvTokenHttpController(Base: any = Sample) {
	class AbstractBase extends ModelEnvTokenController(Base) {
	}

	return AbstractBase;
}

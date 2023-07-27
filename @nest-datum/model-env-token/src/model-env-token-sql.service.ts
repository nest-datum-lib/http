import { ModelEnvSqlService } from '@nest-datum/model-env';
import { ModelEnvTokenService } from './model-env-token.service';

class Sample {
}

export function ModelEnvTokenSqlService(Base: any = Sample) {
	class AbstractBase extends ModelEnvSqlService(ModelEnvTokenService(Base)) {
	}

	return AbstractBase;
}

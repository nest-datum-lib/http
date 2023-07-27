import { ModelSqlService } from '@nest-datum/model';
import { ModelEnvService } from './model-env.service';

class Sample {
}

export function ModelEnvSqlService(Base: any = Sample) {
	class AbstractBase extends ModelSqlService(ModelEnvService(Base)) {
	}

	return AbstractBase;
}

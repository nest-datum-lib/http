import { ModelSqlService } from '@nest-datum/model';
import { ModelDataValueService } from './model-data-value.service';

class Sample {
}

export function ModelDataValueSqlService(Base: any = Sample) {
	class AbstractBase extends ModelSqlService(ModelDataValueService(Base)) {
	}

	return AbstractBase;
}

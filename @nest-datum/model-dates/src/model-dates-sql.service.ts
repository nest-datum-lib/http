import { ModelSqlService } from '@nest-datum/model';
import { ModelDatesService } from './model-dates.service';

class Sample {
}

export function ModelDatesSqlService(Base: any = Sample) {
	class AbstractBase extends ModelSqlService(ModelDatesService(Base)) {
	}

	return AbstractBase;
}

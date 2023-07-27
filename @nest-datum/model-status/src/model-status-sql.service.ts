import { ModelSqlService } from '@nest-datum/model';
import { ModelStatusService } from './model-status.service';

class Sample {
}

export function ModelStatusSqlService(Base: any = Sample) {
	class AbstractBase extends ModelSqlService(ModelStatusService(Base)) {
	}

	return AbstractBase;
}

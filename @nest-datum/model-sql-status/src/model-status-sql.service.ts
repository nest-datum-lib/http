import { ModelStatusService } from './model-status.service';

class Sample {
}

export function ModelStatusSqlService(Base: any = Sample) {
	class AbstractBase extends ModelStatusService(Base) {
	}

	return AbstractBase;
}

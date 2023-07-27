import { ModelSqlService } from '@nest-datum/model';
import { ModelRemovableService } from './model-removable.service';

class Sample {
}

export function ModelRemovableSqlService(Base: any = Sample) {
	class AbstractBase extends ModelSqlService(ModelRemovableService(Base)) {
	}

	return AbstractBase
}

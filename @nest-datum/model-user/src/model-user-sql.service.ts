import { ModelSqlService } from '@nest-datum/model';
import { ModelUserService } from './model-user.service';

class Sample {
}

export function ModelUserSqlService(Base: any = Sample) {
	class AbstractBase extends ModelSqlService(ModelUserService(Base)) {
	}

	return AbstractBase;
}

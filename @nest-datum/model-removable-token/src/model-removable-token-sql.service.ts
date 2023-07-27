import { ModelRemovableSqlService } from '@nest-datum/model-removable';
import { ModelRemovableTokenService } from './model-removable-token.service';

class Sample {
}

export function ModelRemovableTokenSqlService(Base: any = Sample) {
	class AbstractBase extends ModelRemovableSqlService(ModelRemovableTokenService(Base)) {
	}

	return AbstractBase;
}

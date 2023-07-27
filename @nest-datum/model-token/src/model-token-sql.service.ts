import { ModelSqlService } from '@nest-datum/model';
import { ModelTokenService } from './model-token.service';

class Sample {
}

export function ModelTokenSqlService(Base: any = Sample) {
	class AbstractBase extends ModelSqlService(ModelTokenService(Base)) {
	}

	return AbstractBase;
}

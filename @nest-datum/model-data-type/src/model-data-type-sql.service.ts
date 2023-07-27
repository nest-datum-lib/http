import { ModelSqlService } from '@nest-datum/model';
import { ModelDataTypeService } from './model-data-type.service';

class Sample {
}

export function ModelDataTypeSqlService(Base: any = Sample) {
	class AbstractBase extends ModelSqlService(ModelDataTypeService(Base)) {
	}

	return AbstractBase;
}

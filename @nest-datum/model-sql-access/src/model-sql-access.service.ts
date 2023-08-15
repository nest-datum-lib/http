import { ModelAccessService } from '@nest-datum/model-access';

class Sample {
}

export function ModelSqlAccessService(Base: any = Sample) {
	class AbstractBase extends ModelAccessService(Base) {
		public readonly accessRoleRepository;
	}

	return AbstractBase;
}

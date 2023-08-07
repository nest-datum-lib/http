import { ModelRemovableService } from '@nest-datum/model-removable';

class Sample {
}

export function ModelSqlRemovableService(Base: any = Sample) {
	class AbstractBase extends ModelRemovableService(Base) {
		async getManyAllowPreparePropertiesSelect(): Promise<Array<string>> {
			return [ 
				...await super.getManyAllowPreparePropertiesSelect(), 
				'isDeleted',
				'isNotDeleted',
			];
		}

		async createAllowPrepareProperties(): Promise<Array<string>> {
			return [ 
				...await super.createAllowPrepareProperties(), 
				'isDeleted',
				'isNotDeleted',
			];
		}
	}

	return AbstractBase
}

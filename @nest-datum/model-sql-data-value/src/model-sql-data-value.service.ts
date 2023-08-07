import { ModelDataValueService } from '@nest-datum/model-data-value';

class Sample {
}

export function ModelSqlDataValueService(Base: any = Sample) {
	class AbstractBase extends ModelDataValueService(Base) {
		async getManyAllowPreparePropertiesSelect(): Promise<Array<string>> {
			return [ 
				...await super.getManyAllowPreparePropertiesSelect(), 
				'dataValue',
			];
		}

		async createAllowPrepareProperties(): Promise<Array<string>> {
			return [ 
				...await super.createAllowPrepareProperties(), 
				'dataValue',
			];
		}
	}

	return AbstractBase;
}

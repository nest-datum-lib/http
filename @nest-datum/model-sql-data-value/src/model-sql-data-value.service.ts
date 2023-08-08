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

		async createPrepareProperties(properties: object): Promise<object> {
			return await super.createPrepareProperties({ dataValue: '', ...properties });
		}
	}

	return AbstractBase;
}

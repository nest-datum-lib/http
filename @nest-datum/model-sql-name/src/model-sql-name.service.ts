import { ModelNameService } from '@nest-datum/model-name';

class Sample {
}

export function ModelSqlNameService(Base: any = Sample) {
	class AbstractBase extends ModelNameService(Base) {
		async getManyAllowPreparePropertiesSelect(): Promise<Array<string>> {
			return [ 
				...await super.getManyAllowPreparePropertiesSelect(), 
				'name',
			];
		}

		async createAllowPrepareProperties(): Promise<Array<string>> {
			return [ 
				...await super.createAllowPrepareProperties(), 
				'name',
			];
		}
	}

	return AbstractBase;
}

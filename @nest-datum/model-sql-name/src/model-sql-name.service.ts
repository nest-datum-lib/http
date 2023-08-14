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

		async getOneAllowPrepareProperties(): Promise<Array<string>> {
			return [ 
				...await super.getOneAllowPreparePropertiesSelect(), 
				'name',
			];
		}

		async createAllowPrepareProperties(): Promise<Array<string>> {
			return [ 
				...await super.createAllowPrepareProperties(), 
				'name',
			];
		}

		async updateManyAllowPrepareProperties(): Promise<Array<string>> {
			return [ 
				...await super.updateManyAllowPrepareProperties(), 
				'name',
			];
		}

		async dropManyAllowPrepareProperties(): Promise<Array<string>> {
			return [ 
				...await super.dropManyAllowPrepareProperties(), 
				'name',
			];
		}

		async dropOneAllowPrepareProperties(): Promise<Array<string>> {
			return [ 
				...await super.dropOneAllowPrepareProperties(), 
				'name',
			];
		}
	}

	return AbstractBase;
}

import { ModelDataTypeService } from '@nest-datum/model-data-type';

class Sample {
}

export function ModelSqlDataTypeService(Base: any = Sample) {
	class AbstractBase extends ModelDataTypeService(Base) {
		async getManyAllowPreparePropertiesSelect(): Promise<Array<string>> {
			return [ 
				...await super.getManyAllowPreparePropertiesSelect(), 
				'dataTypeId',
			];
		}

		async getOneAllowPrepareProperties(): Promise<Array<string>> {
			return [ 
				...await super.getOneAllowPreparePropertiesSelect(), 
				'dataTypeId',
			];
		}

		async createAllowPrepareProperties(): Promise<Array<string>> {
			return [ 
				...await super.createAllowPrepareProperties(), 
				'dataTypeId',
			];
		}

		async updateManyAllowPrepareProperties(): Promise<Array<string>> {
			return [ 
				...await super.updateManyAllowPrepareProperties(), 
				'dataTypeId',
			];
		}

		async updateOneAllowPrepareProperties(): Promise<Array<string>> {
			return [ 
				...await super.updateOneAllowPrepareProperties(), 
				'dataTypeId',
			];
		}
	}

	return AbstractBase;
}

import { ModelDataValueService } from '@nest-datum/model-data-value';
import { exists as utilsCheckExists } from '@nest-datum-utils/check';

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

		async getOneAllowPrepareProperties(): Promise<Array<string>> {
			return [ 
				...await super.getOneAllowPrepareProperties(), 
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
			return await super.createPrepareProperties({ 
				...properties,
				dataValue: utilsCheckExists(properties['dataValue'])
					? String(properties['dataValue'])
					: '',
			});
		}

		async updateManyAllowPrepareProperties(): Promise<Array<string>> {
			return [ 
				...await super.updateManyAllowPrepareProperties(), 
				'dataValue',
			];
		}

		async updateOneAllowPrepareProperties(): Promise<Array<string>> {
			return [ 
				...await super.updateOneAllowPrepareProperties(), 
				'dataValue',
			];
		}

		async dropManyAllowPrepareProperties(): Promise<Array<string>> {
			return [ 
				...await super.dropManyAllowPrepareProperties(), 
				'dataValue',
			];
		}

		async dropOneAllowPrepareProperties(): Promise<Array<string>> {
			return [ 
				...await super.dropOneAllowPrepareProperties(), 
				'dataValue',
			];
		}
	}

	return AbstractBase;
}

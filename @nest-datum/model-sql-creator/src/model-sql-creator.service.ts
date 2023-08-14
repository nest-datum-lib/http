import { ModelCreatorService } from '@nest-datum/model-creator';
import { objFilled as utilsCheckObjFilled } from '@nest-datum-utils/check';

class Sample {
}

export function ModelSqlCreatorService(Base: any = Sample) {
	class AbstractBase extends ModelCreatorService(Base) {
		async getManyAllowPreparePropertiesSelect(): Promise<Array<string>> {
			return [ 
				...await super.getManyAllowPreparePropertiesSelect(), 
				'creatorId',
			];
		}

		async getOneAllowPrepareProperties(): Promise<Array<string>> {
			return [ 
				...await super.getOneAllowPrepareProperties(), 
				'creatorId',
			];
		}

		async createAllowPrepareProperties(): Promise<Array<string>> {
			return [ 
				...await super.createAllowPrepareProperties(), 
				'creatorId',
			];
		}

		async createPrepareProperties(properties: object): Promise<object> {
			return await super.createPrepareProperties({ 
				...properties, 
				...utilsCheckObjFilled(properties['authedUser'])
					? { creatorId: properties['authedUser']['id'] }
					: {},
			});
		}

		async updateManyAllowPrepareProperties(): Promise<Array<string>> {
			return [ 
				...await super.updateManyAllowPrepareProperties(), 
				'creatorId',
			];
		}

		async updateOneAllowPrepareProperties(): Promise<Array<string>> {
			return [ 
				...await super.updateOneAllowPrepareProperties(), 
				'creatorId',
			];
		}

		async dropManyAllowPrepareProperties(): Promise<Array<string>> {
			return [ 
				...await super.dropManyAllowPrepareProperties(), 
				'creatorId',
			];
		}

		async dropOneAllowPrepareProperties(): Promise<Array<string>> {
			return [ 
				...await super.dropOneAllowPrepareProperties(), 
				'creatorId',
			];
		}
	}

	return AbstractBase;
}

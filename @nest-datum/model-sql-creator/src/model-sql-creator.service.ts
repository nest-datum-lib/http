import { ModelCreatorService } from '@nest-datum/model-creator';

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
				...await super.getOneAllowPreparePropertiesSelect(), 
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
			return await super.createPrepareProperties({ ...properties, creatorId: properties['authedUserId'] });
		}

		async updateManyAllowPrepareProperties(): Promise<Array<string>> {
			return [ 
				...await super.updateManyAllowPrepareProperties(), 
				'creatorId',
			];
		}

		async updateManyPrepareProperties(properties: object): Promise<object> {
			const propertiesProcessed = await super.updateManyPrepareProperties(properties);
			let id;

			for (id in propertiesProcessed._updateManyPrepareProperties) {
				propertiesProcessed['_updateManyPrepareProperties'][id]['creatorId'] = properties['authedUserId'];
			}
			return propertiesProcessed;
		}

		async updateOneAllowPrepareProperties(): Promise<Array<string>> {
			return [ 
				...await super.updateOneAllowPrepareProperties(), 
				'creatorId',
			];
		}

		async updateOnePrepareProperties(properties: object): Promise<object> {
			return await super.updateOnePrepareProperties({ ...properties, creatorId: properties['authedUserId'] });
		}
	}

	return AbstractBase;
}

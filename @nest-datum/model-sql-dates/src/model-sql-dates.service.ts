import { ModelDatesService } from '@nest-datum/model-dates';

class Sample {
}

export function ModelSqlDatesService(Base: any = Sample) {
	class AbstractBase extends ModelDatesService(Base) {
		public readonly getManyOrderByDefault: object = { createdAt: 'DESC' };

		async getManyPreparePropertiesOrderBy(properties: object): Promise<string> {
			return await super.getManyPreparePropertiesOrderBy({ 
				...properties, 
				orderBy: { 
					...properties['orderBy'], 
					...this.getManyOrderByDefault,
				}, 
			});
		}

		async getManyAllowPreparePropertiesSelect(): Promise<Array<string>> {
			return [ 
				...await super.getManyAllowPreparePropertiesSelect(), 
				'createdAt',
				'updatedAt',
			];
		}

		async getManyAllowPreparePropertiesOrderBy(): Promise<Array<string>> {
			return [
				...await super.getManyAllowPreparePropertiesOrderBy(), 
				'createdAt',
				'updatedAt',
			];
		}

		async getOneAllowPrepareProperties(): Promise<Array<string>> {
			return [ 
				...await super.getOneAllowPreparePropertiesSelect(), 
				'createdAt',
				'updatedAt',
			];
		}

		async createAllowPrepareProperties(): Promise<Array<string>> {
			return [ 
				...await super.createAllowPrepareProperties(), 
				'createdAt',
				'updatedAt',
			];
		}

		async updateManyAllowPrepareProperties(): Promise<Array<string>> {
			return [ 
				...await super.updateManyAllowPrepareProperties(), 
				'createdAt',
				'updatedAt',
			];
		}

		async updateOneAllowPrepareProperties(): Promise<Array<string>> {
			return [ 
				...await super.updateOneAllowPrepareProperties(), 
				'createdAt',
				'updatedAt',
			];
		}

		async dropManyAllowPrepareProperties(): Promise<Array<string>> {
			return [ 
				...await super.dropManyAllowPrepareProperties(), 
				'createdAt',
				'updatedAt',
			];
		}

		async dropOneAllowPrepareProperties(): Promise<Array<string>> {
			return [ 
				...await super.dropOneAllowPrepareProperties(), 
				'createdAt',
				'updatedAt',
			];
		}
	}

	return AbstractBase;
}

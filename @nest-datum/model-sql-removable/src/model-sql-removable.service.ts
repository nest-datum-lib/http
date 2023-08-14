import { ModelRemovableService } from '@nest-datum/model-removable';

class Sample {
}

export function ModelSqlRemovableService(Base: any = Sample) {
	class AbstractBase extends ModelRemovableService(Base) {
		private readonly removable_properties = [
			'isDeleted',
			'isNotDeleted',
		];

		async getManyAllowPreparePropertiesSelect(): Promise<Array<string>> {
			return [ 
				...await super.getManyAllowPreparePropertiesSelect(), 
				...this.removable_properties,
			];
		}

		async getOneAllowPrepareProperties(): Promise<Array<string>> {
			return [
				...await super.getOneAllowPrepareProperties(),
				...this.removable_properties,
			];
		}

		async createAllowPrepareProperties(): Promise<Array<string>> {
			return [ 
				...await super.createAllowPrepareProperties(), 
				...this.removable_properties,
			];
		}

		async updateManyAllowPrepareProperties(): Promise<Array<string>> {
			return [
				...await super.updateManyAllowPrepareProperties(),
				...this.removable_properties,
			];
		}

		async updateOneAllowPrepareProperties(): Promise<Array<string>> {
			return [
				...await super.updateOneAllowPrepareProperties(),
				...this.removable_properties,
			];
		}

		async dropManyAllowPrepareProperties(): Promise<Array<string>> {
			return [
				...await super.dropManyAllowPrepareProperties(),
				...this.removable_properties,
			];
		}
		
		async dropOneAllowPrepareProperties(): Promise<Array<string>> {
			return [
				...await super.dropOneAllowPrepareProperties(),
				...this.removable_properties,
			];
		}
	}

	return AbstractBase
}

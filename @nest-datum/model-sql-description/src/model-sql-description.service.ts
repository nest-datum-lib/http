import { ModelDescriptionService } from '@nest-datum/model-description';

class Sample {
}

export function ModelSqlDescriptionService(Base: any = Sample) {
	class AbstractBase extends ModelDescriptionService(Base) {
		async getManyAllowPreparePropertiesSelect(): Promise<Array<string>> {
			return [ 
				...await super.getManyAllowPreparePropertiesSelect(), 
				'description',
			];
		}

		async createAllowPrepareProperties(): Promise<Array<string>> {
			return [ 
				...await super.createAllowPrepareProperties(), 
				'description',
			];
		}
	}

	return AbstractBase;
}

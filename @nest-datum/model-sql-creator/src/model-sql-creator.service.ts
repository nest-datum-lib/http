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

		async createAllowPrepareProperties(): Promise<Array<string>> {
			return [ 
				...await super.createAllowPrepareProperties(), 
				'creatorId',
			];
		}
	}

	return AbstractBase;
}

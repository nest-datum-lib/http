import { ModelEnvService } from '@nest-datum/model-env';

class Sample {
}

export function ModelSqlEnvService(Base: any = Sample) {
	class AbstractBase extends ModelEnvService(Base) {
		async getManyAllowPreparePropertiesSelect(): Promise<Array<string>> {
			return [ 
				...await super.getManyAllowPreparePropertiesSelect(), 
				'envKey',
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

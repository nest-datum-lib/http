import { ModelEnvService } from '@nest-datum/model-env';
import {
	strEnv as utilsCheckStrEnv,
	strName as utilsCheckStrName,
} from '@nest-datum-utils/check';
import { strToEnv as utilsFormatStrToEnv } from '@nest-datum-utils/format';

class Sample {
}

export function ModelSqlEnvService(Base: any = Sample) {
	class AbstractBase extends ModelEnvService(Base) {
		async createEnvKeyByString(value: string): Promise<string> {
			return utilsFormatStrToEnv(value);
		}

		async getManyAllowPreparePropertiesSelect(): Promise<Array<string>> {
			return [ 
				...await super.getManyAllowPreparePropertiesSelect(), 
				'envKey',
			];
		}

		async getOneAllowPrepareProperties(): Promise<Array<string>> {
			return [ 
				...await super.getOneAllowPreparePropertiesSelect(), 
				'envKey',
			];
		}

		async createAllowPrepareProperties(): Promise<Array<string>> {
			return [ 
				...await super.createAllowPrepareProperties(), 
				'envKey',
			];
		}

		async createPrepareProperties(properties: object): Promise<object> {
			const propertiesProcessed = await super.createPrepareProperties(properties);
			
			if (!utilsCheckStrEnv(propertiesProcessed['_createPrepareProperties']['envKey'])
				&& utilsCheckStrName(propertiesProcessed['_createPrepareProperties']['name'])) {
				propertiesProcessed['_createPrepareProperties']['envKey'] = await this.createEnvKeyByString(propertiesProcessed['_createPrepareProperties']['name']) || '';
			}
			return propertiesProcessed;
		}

		async updateManyAllowPrepareProperties(): Promise<Array<string>> {
			return [ 
				...await super.updateManyAllowPrepareProperties(), 
				'envKey',
			];
		}

		async updateManyPrepareProperties(properties: object): Promise<object> {
			const propertiesProcessed = await super.updateManyPrepareProperties(properties);
			let id;

			for (id in propertiesProcessed._updateManyPrepareProperties) {
				if (!utilsCheckStrEnv(propertiesProcessed._updateManyPrepareProperties[id]['envKey'])
					&& utilsCheckStrName(propertiesProcessed._updateManyPrepareProperties[id]['name'])) {
					propertiesProcessed['_createPrepareProperties']['envKey'] = await this.createEnvKeyByString(propertiesProcessed._updateManyPrepareProperties[id]['name']) || '';
				}
			}
			return propertiesProcessed;
		}

		async updateOneAllowPrepareProperties(): Promise<Array<string>> {
			return [ 
				...await super.updateOneAllowPrepareProperties(), 
				'envKey',
			];
		}

		async updateOnePrepareProperties(properties: object): Promise<object> {
			const propertiesProcessed = await super.updateOnePrepareProperties(properties);
			
			if (!utilsCheckStrEnv(propertiesProcessed['_updateOnePrepareProperties']['envKey'])
				&& utilsCheckStrName(propertiesProcessed['_updateOnePrepareProperties']['name'])) {
				propertiesProcessed['_updateOnePrepareProperties']['envKey'] = await this.createEnvKeyByString(propertiesProcessed['_updateOnePrepareProperties']['name']) || '';
			}
			return propertiesProcessed;
		}
	}

	return AbstractBase;
}

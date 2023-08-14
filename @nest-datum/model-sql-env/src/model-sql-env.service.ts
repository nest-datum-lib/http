const fs = require('fs');

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

		// TODO: переместить в класс файловой системы
		async keyValuesListFromFile(): Promise<Array<string>> {
			return fs
				.readFileSync(`${process.env['PWD']}/.env`)
				.toString()
				.split(`\n`);
		}

		// TODO: переместить в класс файловой системы
		async writeNewDataToFile(envKeysList: Array<string>): Promise<boolean> {
			return await (new Promise((resolve, reject) => {
				fs.writeFile(`${process.env['PWD']}/.env`, envKeysList.join(`\n`), (err) => {
					if (err) {
						return reject(new Error(`Error while rewriting the ".env" file.`));
					}
					return resolve(true);
				});
			}));
		}

		async addKeyValueValueToFile(envKey: string, dataValue: string): Promise<boolean> {
			const envKeysList = await this.keyValuesListFromFile();
			const envKeysListIndex = envKeysList.findIndex((keyValue) => keyValue.indexOf(envKey) === 0);

			if (envKeysListIndex >= 0) {
				envKeysList.splice(envKeysListIndex, 1);
			}
			envKeysList.push(`${envKey}=${dataValue}`);

			return await this.writeNewDataToFile(envKeysList);
		}

		async removeKeyValueValueFromFile(envKey: string): Promise<boolean> {
			const envKeysList = await this.keyValuesListFromFile();
			const envKeysListIndex = envKeysList.findIndex((keyValue) => keyValue.indexOf(envKey) === 0);

			if (envKeysListIndex >= 0) {
				envKeysList.splice(envKeysListIndex, 1);
			}
			return await this.writeNewDataToFile(envKeysList);
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
			
			if (!utilsCheckStrEnv((propertiesProcessed['_createPrepareProperties'] || {})['envKey'])
				&& utilsCheckStrName((propertiesProcessed['_createPrepareProperties'] || {})['name'])) {
				propertiesProcessed['_createPrepareProperties']['envKey'] = await this.createEnvKeyByString(propertiesProcessed['_createPrepareProperties']['name']) || '';
			}
			return propertiesProcessed;
		}

		async createAfter(properties: object): Promise<object> {
			if ((properties['_createProcessResult'] || {})['envKey']) {
				await this.addKeyValueValueToFile(properties['_createProcessResult']['envKey'], (properties['_createProcessResult'] || {})['dataValue']);
			}
			return await super.createAfter(properties);
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
				if (!utilsCheckStrEnv((propertiesProcessed._updateManyPrepareProperties[id] || {})['envKey'])
					&& utilsCheckStrName((propertiesProcessed._updateManyPrepareProperties[id] || {})['name'])) {
					propertiesProcessed['_updateManyPrepareProperties'][id]['envKey'] = await this.createEnvKeyByString(propertiesProcessed._updateManyPrepareProperties[id]['name']) || '';
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
			
			if (!utilsCheckStrEnv((propertiesProcessed['_updateOnePrepareProperties'] || {})['envKey'])
				&& utilsCheckStrName((propertiesProcessed['_updateOnePrepareProperties'] || {})['name'])) {
				propertiesProcessed['_updateOnePrepareProperties']['envKey'] = await this.createEnvKeyByString(propertiesProcessed['_updateOnePrepareProperties']['name']) || '';
			}
			return propertiesProcessed;
		}

		async updateOneProcess(properties: object): Promise<object> {
			const model = await this.repository.findOne({ 
				select: {
					id: true,
					envKey: true,
				}, 
				where: { 
					id: properties['id'], 
				}, 
			});

			return await super.updateOneProcess(
				{ ...properties,
					...(() => (model ? { prevEnvKey: model['envKey'] } : {}))(),
				}
			);
		}

		async updateOneResult(propertiesInput: object, propertiesOutput: object): Promise<object> {
			const propertiesProcessed = await super.updateOneResult(propertiesInput, propertiesOutput);

			if (propertiesProcessed['envKey']
				&& propertiesOutput['prevEnvKey'] !== propertiesProcessed['envKey']) {
				await this.removeKeyValueValueFromFile(propertiesOutput['prevEnvKey']);
				await this.addKeyValueValueToFile(propertiesProcessed['envKey'], propertiesProcessed['dataValue']);
			}
			return propertiesProcessed;
		}

		async dropManyAllowPrepareProperties(): Promise<Array<string>> {
			return [ 
				...await super.dropManyAllowPrepareProperties(), 
				'envKey',
			];
		}

		async dropOneAllowPrepareProperties(): Promise<Array<string>> {
			return [ 
				...await super.dropOneAllowPrepareProperties(), 
				'envKey',
			];
		}
	}

	return AbstractBase;
}

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

		async keyValuesListFromFile(): Promise<Array<string>> {
			return fs
				.readFileSync(`${process.env['PWD']}/.env`)
				.toString()
				.split(`\n`);
		}

		async writeNewDataToFile(envKeysList: Array<string>): Promise<boolean> {
			return await (new Promise((resolve, reject) => {
				fs.writeFile(`${process.env['PWD']}/.env`, envKeysList.join(`\n`), (err) => {
					if (err) {
						return reject(new Error(`Error while rewriting the ".env" file.`));
					}
					return true;
				});
			}));
		}

		// TODO: переместить в класс файловой системы
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
			const envKeysList = fs
				.readFileSync(`${process.env['PWD']}/.env`)
				.toString()
				.split(`\n`);
			const envKeysListIndex = envKeysList.findIndex((keyValue) => keyValue.indexOf(envKey) === 0);

			if (envKeysListIndex >= 0) {
				envKeysList.splice(envKeysListIndex, 1);
			}
			return await (new Promise((resolve, reject) => {
				fs.writeFile(`${process.env['PWD']}/.env`, envKeysList.join(`\n`), (err) => {
					if (err) {
						return reject(new Error(`Error while rewriting the ".env" file.`));
					}
					return true;
				});
			}));
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
			
			if (!utilsCheckStrEnv(propertiesProcessed['_updateOnePrepareProperties']['envKey'])
				&& utilsCheckStrName(propertiesProcessed['_updateOnePrepareProperties']['name'])) {
				propertiesProcessed['_updateOnePrepareProperties']['envKey'] = await this.createEnvKeyByString(propertiesProcessed['_updateOnePrepareProperties']['name']) || '';
			}
			return propertiesProcessed;
		}

		async createAfter(properties: object): Promise<object> {
			if (properties['_createProcessResult']['envKey']) {
				await this.addKeyValueValueToFile(properties['_createProcessResult']['envKey'], properties['_createProcessResult']['dataValue']);
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
				if (!utilsCheckStrEnv(propertiesProcessed._updateManyPrepareProperties[id]['envKey'])
					&& utilsCheckStrName(propertiesProcessed._updateManyPrepareProperties[id]['name'])) {
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
			
			if (!utilsCheckStrEnv(propertiesProcessed['_updateOnePrepareProperties']['envKey'])
				&& utilsCheckStrName(propertiesProcessed['_updateOnePrepareProperties']['name'])) {
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

			return await super.updateOneProcess({ ...properties, prevEnvKey: model['envKey'] });
		}

		async updateOneAfter(properties: object): Promise<object> {
			if (properties['_updateOneProcessResult']['envKey']
				&& properties['prevEnvKey'] !== properties['_updateOneProcessResult']['envKey']) {
				await this.addKeyValueValueToFile(properties['_updateOneProcessResult']['envKey'], properties['_updateOneProcessResult']['dataValue']);
			}
			else if (properties['prevEnvKey']) {
				await this.removeKeyValueValueFromFile(properties['prevEnvKey']);
			}
			return await super.updateOneAfter(properties);
		}
	}

	return AbstractBase;
}

import { ModelService } from '@nest-datum/model';

export class ModelEnvService extends ModelService {
	protected async getOneWithEnvBefore(properties: object): Promise<object> {
		return await this.before(properties);
	}

	protected async getOneWithEnvPrepareProperties(properties: object): Promise<object> {
		return properties;
	}

	protected async getOneWithEnvProcess(properties: object): Promise<object> {
		return properties;
	}

	protected async getOneWithEnvAfter(properties: object): Promise<object> {
		return await this.after(properties);
	}

	protected async getOneWithEnvResult(propertiesInput: object, propertiesOutput: object): Promise<object> {
		return propertiesOutput;
	}

	async getOneWithEnv(properties: object): Promise<object> {
		return await this.getOneWithEnvResult(properties, await this.getOneWithEnvAfter(await this.getOneWithEnvProcess(await this.getOneWithEnvPrepareProperties(await this.getOneWithEnvBefore(properties)))));
	}
}

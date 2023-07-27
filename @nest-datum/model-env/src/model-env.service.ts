import { ModelService } from '@nest-datum/model';

class Sample {
}

export function ModelEnvService(Base: any = Sample) {
	class AbstractBase extends ModelService(Base) {
		async getOneWithEnvBefore(properties: object): Promise<object> {
			return await this.before(properties);
		}

		async getOneWithEnvPrepareProperties(properties: object): Promise<object> {
			return properties;
		}

		async getOneWithEnvProcess(properties: object): Promise<object> {
			return properties;
		}

		async getOneWithEnvAfter(properties: object): Promise<object> {
			return await this.after(properties);
		}

		async getOneWithEnvResult(propertiesInput: object, propertiesOutput: object): Promise<object> {
			return propertiesOutput;
		}

		async getOneWithEnv(properties: object): Promise<object> {
			return await this.getOneWithEnvResult(properties, await this.getOneWithEnvAfter(await this.getOneWithEnvProcess(await this.getOneWithEnvPrepareProperties(await this.getOneWithEnvBefore(properties)))));
		}
	}

	return AbstractBase;
}

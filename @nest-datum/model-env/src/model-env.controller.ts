import { ModelController } from '@nest-datum/model';
import { ModelEnvService } from './model-env.service';

export class ModelEnvController extends ModelController {
	protected readonly service: ModelEnvService;
	protected readonly createWithEnv: boolean;
	protected readonly updateManyWithEnv: boolean;
	protected readonly updateOneWithEnv: boolean;

	async provideEnv(properties: object): Promise<object> {
		return properties;
	}

	async validateCreate(properties: object): Promise<object> {
		return await super.validateCreate((this.createWithEnv ?? true)
			? await this.provideEnv(properties)
			: properties);
	}

	async validateUpdateMany(properties: object): Promise<object> {
		return await super.validateUpdateMany((this.updateManyWithEnv ?? true)
			? await this.provideEnv(properties)
			: properties);
	}

	async validateUpdateOne(properties: object): Promise<object> {
		return await super.validateUpdateOne((this.updateOneWithEnv ?? true)
			? await this.provideEnv(properties)
			: properties);
	}

	async validateGetOneWithEnv(properties: object): Promise<object> {
		return properties;
	}

	async getOneWithEnv(envValue: string, properties: object): Promise<object> {
		return await this.errorHandler(async () => await this.service.getOneWithEnv(await this.validateGetOneWithEnv({ ...properties, envValue })));
	}
}

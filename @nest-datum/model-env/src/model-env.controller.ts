
class Sample {
}

export function ModelEnvController(Base: any = Sample) {
	class AbstractBase extends Base {
		public readonly service;
		public readonly createWithEnv: boolean;
		public readonly updateManyWithEnv: boolean;
		public readonly updateOneWithEnv: boolean;

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

	return AbstractBase;
}

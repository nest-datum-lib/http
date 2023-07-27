import { ModelTokenController } from '@nest-datum/model-token';
import { ModelEnvController } from '@nest-datum/model-env';

class Sample {
}

export function ModelEnvTokenController(Base: any = Sample) {
	class AbstractBase extends ModelTokenController(ModelEnvController(Base)) {
		public readonly getOneWithEnvWithToken: boolean;

		async validateGetOneWithEnv(properties: object): Promise<object> {
			return await super.validateGetOneWithEnv((this.getOneWithEnvWithToken ?? true)
				? await this.provideToken(properties)
				: properties);
		}
	}

	return AbstractBase;
}

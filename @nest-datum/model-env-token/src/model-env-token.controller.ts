import { Mixin } from 'ts-mixer';
import { ModelTokenController } from '@nest-datum/model-token';
import { ModelEnvController } from '@nest-datum/model-env';

export class ModelEnvTokenController extends Mixin(ModelTokenController, ModelEnvController) {
	protected readonly getOneWithEnvWithToken: boolean;

	async validateGetOneWithEnv(properties: object): Promise<object> {
		return await super.validateGetOneWithEnv((this.getOneWithEnvWithToken ?? true)
			? await this.provideToken(properties)
			: properties);
	}
}
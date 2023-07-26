import { Mixin } from 'ts-mixer';
import { ModelTokenController } from '@nest-datum/model-token';
import { ModelRemovableController } from '@nest-datum/model-removable';

export class ModelRemovableTokenController extends Mixin(ModelTokenController, ModelRemovableController) {
	protected readonly restoreManyWithToken: boolean;
	protected readonly restoreOneWithToken: boolean;

	async validateRestoreMany(properties: object): Promise<object> {
		return await super.validateRestoreMany((this.restoreManyWithToken ?? true)
			? await this.provideToken(properties)
			: properties);
	}

	async validateRestoreOne(properties: object): Promise<object> {
		return await super.validateRestoreOne((this.restoreOneWithToken ?? true)
			? await this.provideToken(properties)
			: properties);
	}
}

import { ModelTokenController } from '@nest-datum/model-token';
import { ModelRemovableController } from '@nest-datum/model-removable';

class Sample {
}

export function ModelRemovableTokenController(Base: any = Sample) {
	class AbstractBase extends ModelTokenController(ModelRemovableController(Base)) {
		public readonly restoreManyWithToken: boolean;
		public readonly restoreOneWithToken: boolean;

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

	return AbstractBase;
}

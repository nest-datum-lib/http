import { ModelController } from '@nest-datum/model';

class Sample {
}

export function ModelTokenController(Base: any = Sample) {
	class AbstractBase extends ModelController(Base) {
		public readonly getManyWithToken: boolean;
		public readonly getOneWithToken: boolean;
		public readonly createWithToken: boolean;
		public readonly updateManyWithToken: boolean;
		public readonly updateOneWithToken: boolean;
		public readonly dropManyWithToken: boolean;
		public readonly dropOneWithToken: boolean;

		async provideToken(properties: object): Promise<object> {
			return properties;
		}

		async validateGetMany(properties: object): Promise<object> {
			return await super.validateGetMany((this.getManyWithToken ?? true)
				? await this.provideToken(properties)
				: properties);
		}

		async validateGetOne(properties: object): Promise<object> {
			return await super.validateGetOne((this.getOneWithToken ?? true)
				? await this.provideToken(properties)
				: properties);
		}

		async validateCreate(properties: object): Promise<object> {
			return await super.validateCreate((this.createWithToken ?? true)
				? await this.provideToken(properties)
				: properties);
		}

		async validateUpdateMany(properties: object): Promise<object> {
			return await super.validateUpdateMany((this.updateManyWithToken ?? true)
				? await this.provideToken(properties)
				: properties);
		}

		async validateUpdateOne(properties: object): Promise<object> {
			return await super.validateUpdateOne((this.updateOneWithToken ?? true)
				? await this.provideToken(properties)
				: properties);
		}

		async validateDropMany(properties: object): Promise<object> {
			return await super.validateDropMany((this.dropManyWithToken ?? true)
				? await this.provideToken(properties)
				: properties);
		}

		async validateDropOne(properties: object): Promise<object> {
			return await super.validateDropOne((this.dropOneWithToken ?? true)
				? await this.provideToken(properties)
				: properties);
		}
	}

	return AbstractBase;
}

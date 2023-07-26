import { ModelController } from '@nest-datum/model';

export class ModelTokenController extends ModelController {
	protected readonly getManyWithToken: boolean;
	protected readonly getOneWithToken: boolean;
	protected readonly createWithToken: boolean;
	protected readonly updateManyWithToken: boolean;
	protected readonly updateOneWithToken: boolean;
	protected readonly dropManyWithToken: boolean;
	protected readonly dropOneWithToken: boolean;

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

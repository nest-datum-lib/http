import { ModelService } from './model.service';

export class ModelController {
	protected readonly service: ModelService;

	async errorHandler(callback: Function) {
		return await callback();
	}

	async validateGetMany(properties: object): Promise<object> {
		return properties;
	}

	async validateGetOne(properties: object): Promise<object> {
		return properties;
	}

	async validateCreate(properties: object): Promise<object> {
		return properties;
	}

	async validateUpdateMany(properties: object): Promise<object> {
		return properties;
	}

	async validateUpdateOne(properties: object): Promise<object> {
		return properties;
	}

	async validateDropMany(properties: object): Promise<object> {
		return properties;
	}

	async validateDropOne(properties: object): Promise<object> {
		return properties;
	}

	async getMany(properties: object): Promise<object> {
		return await this.errorHandler(async () => await this.service.getMany(await this.validateGetMany(properties)));
	}

	async getOne(id: string, properties: object): Promise<object> {
		return await this.errorHandler(async () => await this.service.getOne(await this.validateGetOne({ ...properties, id })));
	}

	async create(properties: object): Promise<object> {
		return await this.errorHandler(async () => await this.service.create(await this.validateCreate(properties)));
	}

	async updateMany(properties: object): Promise<object> {
		return await this.errorHandler(async () => await this.service.updateMany(await this.validateUpdateMany(properties)));
	}

	async updateOne(id: string, properties: object): Promise<object> {
		return await this.errorHandler(async () => await this.service.updateOne(await this.validateUpdateOne({ ...properties, id })));
	}

	async dropMany(properties: object): Promise<object> {
		return await this.errorHandler(async () => await this.service.dropMany(await this.validateDropMany(properties)));
	}

	async dropOne(id: string, properties: object): Promise<object> {
		return await this.errorHandler(async () => await this.service.dropOne(await this.validateDropOne({ ...properties, id })));
	}
}

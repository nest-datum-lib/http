
export class ModelService {
	protected async before(properties: object): Promise<object> {
		return properties;
	}

	protected async after(properties: object): Promise<object> {
		return properties;
	}

	protected async getManyBefore(properties: object): Promise<object> {
		return await this.before(properties);
	}

	protected async getManyPrepareProperties(properties: object): Promise<object> {
		return properties;
	}

	protected async getManyProcess(properties: object): Promise<object> {
		return properties;
	}

	protected async getManyAfter(properties: object): Promise<object> {
		return properties;
	}

	protected async getManyResult(propertiesInput: object, propertiesOutput: object): Promise<object> {
		return propertiesOutput;
	}

	async getMany(properties: object): Promise<object> {
		return await this.getManyResult(properties, await this.getManyAfter(await this.getManyProcess(await this.getManyPrepareProperties(await this.getManyBefore(properties)))));
	}

	protected async getOneBefore(properties: object): Promise<object> {
		return await this.before(properties);
	}

	protected async getOnePrepareProperties(properties: object): Promise<object> {
		return properties;
	}

	protected async getOneProcess(properties: object): Promise<object> {
		return properties;
	}

	protected async getOneAfter(properties: object): Promise<object> {
		return properties;
	}

	protected async getOneResult(propertiesInput: object, propertiesOutput: object): Promise<object> {
		return propertiesOutput;
	}

	async getOne(properties: object): Promise<object> {
		return await this.getOneResult(properties, await this.getOneAfter(await this.getOneProcess(await this.getOnePrepareProperties(await this.getOneBefore(properties)))));
	}

	protected async createBefore(properties: object): Promise<object> {
		return await this.before(properties);
	}

	protected async createPrepareProperties(properties: object): Promise<object> {
		return properties;
	}

	protected async createProcess(properties: object): Promise<object> {
		return properties;
	}

	protected async createAfter(properties: object): Promise<object> {
		return await this.after(properties);
	}

	protected async createResult(propertiesInput: object, propertiesOutput: object): Promise<object> {
		return propertiesOutput;
	}

	async create(properties: object): Promise<object> {
		return await this.createResult(properties, await this.createAfter(await this.createProcess(await this.createPrepareProperties(await this.createBefore(properties)))));
	}

	protected async updateManyBefore(properties: object): Promise<object> {
		return await this.before(properties);
	}

	protected async updateManyPrepareProperties(properties: object): Promise<object> {
		return properties;
	}

	protected async updateManyProcess(properties: object): Promise<object> {
		return properties;
	}

	protected async updateManyAfter(properties: object): Promise<object> {
		return await this.after(properties);
	}

	protected async updateManyResult(propertiesInput: object, propertiesOutput: object): Promise<object> {
		return propertiesOutput;
	}

	async updateMany(properties: object): Promise<object> {
		return await this.updateManyResult(properties, await this.updateManyAfter(await this.updateManyProcess(await this.updateManyPrepareProperties(await this.updateManyBefore(properties)))));
	}

	protected async updateOneBefore(properties: object): Promise<object> {
		return await this.before(properties);
	}

	protected async updateOnePrepareProperties(properties: object): Promise<object> {
		return properties;
	}

	protected async updateOneProcess(properties: object): Promise<object> {
		return properties;
	}

	protected async updateOneAfter(properties: object): Promise<object> {
		return await this.after(properties);
	}

	protected async updateOneResult(propertiesInput: object, propertiesOutput: object): Promise<object> {
		return propertiesOutput;
	}

	async updateOne(properties: object): Promise<object> {
		return await this.updateOneResult(properties, await this.updateOneAfter(await this.updateOneProcess(await this.updateOnePrepareProperties(await this.updateOneBefore(properties)))));
	}

	protected async dropManyBefore(properties: object): Promise<object> {
		return await this.before(properties);
	}

	protected async dropManyPrepareProperties(properties: object): Promise<object> {
		return properties;
	}

	protected async dropManyProcess(properties: object): Promise<object> {
		return properties;
	}

	protected async dropManyAfter(properties: object): Promise<object> {
		return await this.after(properties);
	}

	protected async dropManyResult(propertiesInput: object, propertiesOutput: object): Promise<object> {
		return propertiesOutput;
	}

	async dropMany(properties: object): Promise<object> {
		return await this.dropManyResult(properties, await this.dropManyAfter(await this.dropManyProcess(await this.dropManyPrepareProperties(await this.dropManyBefore(properties)))));
	}

	protected async dropOneBefore(properties: object): Promise<object> {
		return await this.before(properties);
	}

	protected async dropOnePrepareProperties(properties: object): Promise<object> {
		return properties;
	}

	protected async dropOneProcess(properties: object): Promise<object> {
		return properties;
	}

	protected async dropOneAfter(properties: object): Promise<object> {
		return await this.after(properties);
	}

	protected async dropOneResult(propertiesInput: object, propertiesOutput: object): Promise<object> {
		return propertiesOutput;
	}

	async dropOne(properties: object): Promise<object> {
		return await this.dropOneResult(properties, await this.dropOneAfter(await this.dropOneProcess(await this.dropOnePrepareProperties(await this.dropOneBefore(properties)))));
	}
}

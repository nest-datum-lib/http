
class Sample {
}

export function ModelService(Base: any = Sample) {
	class AbstractBase extends Base {
		async before(properties: object): Promise<object> {
			return properties;
		}

		async after(properties: object): Promise<object> {
			return properties;
		}

		async getManyBefore(properties: object): Promise<object> {
			return await this.before(properties);
		}

		async getManyPrepareProperties(properties: object): Promise<object> {
			return properties;
		}

		async getManyProcess(properties: object): Promise<object> {
			return properties;
		}

		async getManyAfter(properties: object): Promise<object> {
			return properties;
		}

		async getManyResult(propertiesInput: object, propertiesOutput: object): Promise<object> {
			return propertiesOutput;
		}

		async getMany(properties: object): Promise<object> {
			return await this.getManyResult(properties, await this.getManyAfter(await this.getManyProcess(await this.getManyPrepareProperties(await this.getManyBefore(properties)))));
		}

		async getOneBefore(properties: object): Promise<object> {
			return await this.before(properties);
		}

		async getOnePrepareProperties(properties: object): Promise<object> {
			return properties;
		}

		async getOneProcess(properties: object): Promise<object> {
			return properties;
		}

		async getOneAfter(properties: object): Promise<object> {
			return properties;
		}

		async getOneResult(propertiesInput: object, propertiesOutput: object): Promise<object> {
			return propertiesOutput;
		}

		async getOne(properties: object): Promise<object> {
			return await this.getOneResult(properties, await this.getOneAfter(await this.getOneProcess(await this.getOnePrepareProperties(await this.getOneBefore(properties)))));
		}

		async createBefore(properties: object): Promise<object> {
			return await this.before(properties);
		}

		/**
		 * Parse the input parameters and prepare the data for the new model.
		 * @param properties object
		 * @return Promise<object>
		 */
		async createPrepareProperties(properties: object): Promise<object> {
			return {};
		}

		/**
		 * Abstract method for creating a new model.
		 * @param {object} properties
		 * @return {Promise<object>}
		 */
		async createProcess(properties: object): Promise<object> {
			return properties;
		}

		async createAfter(properties: object): Promise<object> {
			return await this.after(properties);
		}

		/**
		 * Parsing the resulting data before directly returning it back to the client.
		 * @param {object} propertiesInput
		 * @param {object} propertiesOutput
		 * @return {Promise<object>}
		 */
		async createResult(propertiesInput: object, propertiesOutput: object): Promise<object> {
			return propertiesOutput;
		}

		async create(properties: object): Promise<object> {
			return await this.createResult(properties, await this.createAfter(await this.createProcess(await this.createPrepareProperties(await this.createBefore(properties)))));
		}

		async updateManyBefore(properties: object): Promise<object> {
			return await this.before(properties);
		}

		async updateManyPrepareProperties(properties: object): Promise<object> {
			return properties;
		}

		async updateManyProcess(properties: object): Promise<object> {
			return properties;
		}

		async updateManyAfter(properties: object): Promise<object> {
			return await this.after(properties);
		}

		async updateManyResult(propertiesInput: object, propertiesOutput: object): Promise<object> {
			return propertiesOutput;
		}

		async updateMany(properties: object): Promise<object> {
			return await this.updateManyResult(properties, await this.updateManyAfter(await this.updateManyProcess(await this.updateManyPrepareProperties(await this.updateManyBefore(properties)))));
		}

		async updateOneBefore(properties: object): Promise<object> {
			return await this.before(properties);
		}

		async updateOnePrepareProperties(properties: object): Promise<object> {
			return properties;
		}

		async updateOneProcess(properties: object): Promise<object> {
			return properties;
		}

		async updateOneAfter(properties: object): Promise<object> {
			return await this.after(properties);
		}

		async updateOneResult(propertiesInput: object, propertiesOutput: object): Promise<object> {
			return propertiesOutput;
		}

		async updateOne(properties: object): Promise<object> {
			return await this.updateOneResult(properties, await this.updateOneAfter(await this.updateOneProcess(await this.updateOnePrepareProperties(await this.updateOneBefore(properties)))));
		}

		async dropManyBefore(properties: object): Promise<object> {
			return await this.before(properties);
		}

		async dropManyPrepareProperties(properties: object): Promise<object> {
			return properties;
		}

		async dropManyProcess(properties: object): Promise<object> {
			return properties;
		}

		async dropManyAfter(properties: object): Promise<object> {
			return await this.after(properties);
		}

		async dropManyResult(propertiesInput: object, propertiesOutput: object): Promise<object> {
			return propertiesOutput;
		}

		async dropMany(properties: object): Promise<object> {
			return await this.dropManyResult(properties, await this.dropManyAfter(await this.dropManyProcess(await this.dropManyPrepareProperties(await this.dropManyBefore(properties)))));
		}

		async dropOneBefore(properties: object): Promise<object> {
			return await this.before(properties);
		}

		async dropOnePrepareProperties(properties: object): Promise<object> {
			return properties;
		}

		async dropOneProcess(properties: object): Promise<object> {
			return properties;
		}

		async dropOneAfter(properties: object): Promise<object> {
			return await this.after(properties);
		}

		async dropOneResult(propertiesInput: object, propertiesOutput: object): Promise<object> {
			return propertiesOutput;
		}

		async dropOne(properties: object): Promise<object> {
			return await this.dropOneResult(properties, await this.dropOneAfter(await this.dropOneProcess(await this.dropOnePrepareProperties(await this.dropOneBefore(properties)))));
		}
	}

	return AbstractBase;
}

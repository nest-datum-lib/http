import { ModelService } from '@nest-datum/model';

export class ModelRemovableService extends ModelService {
	async dropMany(properties: object): Promise<object> {
		return await super.dropMany(properties);
	}

	async dropOne(properties: object): Promise<object> {
		return await super.dropOne(properties);
	}

	protected async restoreManyBefore(properties: object): Promise<object> {
		return await this.before(properties);
	}

	protected async restoreManyPrepareProperties(properties: object): Promise<object> {
		return properties;
	}

	protected async restoreManyProcess(properties: object): Promise<object> {
		return properties;
	}

	protected async restoreManyAfter(properties: object): Promise<object> {
		return await this.after(properties);
	}

	protected async restoreManyResult(propertiesInput: object, propertiesOutput: object): Promise<object> {
		return propertiesOutput;
	}

	async restoreMany(properties: object): Promise<object> {
		return await this.restoreManyResult(properties, await this.restoreManyAfter(await this.restoreManyProcess(await this.restoreManyPrepareProperties(await this.restoreManyBefore(properties)))));
	}

	protected async restoreOneBefore(properties: object): Promise<object> {
		return await this.before(properties);
	}

	protected async restoreOnePrepareProperties(properties: object): Promise<object> {
		return properties;
	}

	protected async restoreOneProcess(properties: object): Promise<object> {
		return properties;
	}

	protected async restoreOneAfter(properties: object): Promise<object> {
		return await this.after(properties);
	}

	protected async restoreOneResult(propertiesInput: object, propertiesOutput: object): Promise<object> {
		return propertiesOutput;
	}

	async restoreOne(properties: object): Promise<object> {
		return await this.restoreOneResult(properties, await this.restoreOneAfter(await this.restoreOneProcess(await this.restoreOnePrepareProperties(await this.restoreOneBefore(properties)))));
	}
}

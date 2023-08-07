
class Sample {
}

export function ModelRemovableService(Base: any = Sample) {
	class AbstractBase extends Base {
		async dropMany(properties: object): Promise<object> {
			return await super.dropMany(properties);
		}

		async dropOne(properties: object): Promise<object> {
			return await super.dropOne(properties);
		}

		async restoreManyBefore(properties: object): Promise<object> {
			return await this.before(properties);
		}

		async restoreManyPrepareProperties(properties: object): Promise<object> {
			return properties;
		}

		async restoreManyProcess(properties: object): Promise<object> {
			return properties;
		}

		async restoreManyAfter(properties: object): Promise<object> {
			return await this.after(properties);
		}

		async restoreManyResult(propertiesInput: object, propertiesOutput: object): Promise<object> {
			return propertiesOutput;
		}

		async restoreMany(properties: object): Promise<object> {
			return await this.restoreManyResult(properties, await this.restoreManyAfter(await this.restoreManyProcess(await this.restoreManyPrepareProperties(await this.restoreManyBefore(properties)))));
		}

		async restoreOneBefore(properties: object): Promise<object> {
			return await this.before(properties);
		}

		async restoreOnePrepareProperties(properties: object): Promise<object> {
			return properties;
		}

		async restoreOneProcess(properties: object): Promise<object> {
			return properties;
		}

		async restoreOneAfter(properties: object): Promise<object> {
			return await this.after(properties);
		}

		async restoreOneResult(propertiesInput: object, propertiesOutput: object): Promise<object> {
			return propertiesOutput;
		}

		async restoreOne(properties: object): Promise<object> {
			return await this.restoreOneResult(properties, await this.restoreOneAfter(await this.restoreOneProcess(await this.restoreOnePrepareProperties(await this.restoreOneBefore(properties)))));
		}
	}

	return AbstractBase;
}

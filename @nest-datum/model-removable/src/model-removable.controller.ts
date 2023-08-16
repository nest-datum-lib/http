
class Sample {
}

export function ModelRemovableController(Base: any = Sample) {
	class AbstractBase extends Base {
		public readonly service;

		async validateRestoreMany(properties: object): Promise<object> {
			return properties;
		}

		async validateRestoreOne(properties: object): Promise<object> {
			return properties;
		}

		async restoreMany(properties: object): Promise<object> {
			try {
				return await this.service.restoreMany(await this.validateRestoreMany(properties));
			}
			catch (err) {
				throw new this.ExceptionError(err.message);
			}
		}

		async restoreOne(id: string, properties: object): Promise<object> {
			try {
				return await this.service.restoreOne(await this.validateRestoreOne({ ...properties, id }));
			}
			catch (err) {
				throw new this.ExceptionError(err.message);
			}
		}
	}

	return AbstractBase;
}

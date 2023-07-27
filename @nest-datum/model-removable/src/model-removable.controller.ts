import { ModelController } from '@nest-datum/model';

class Sample {
}

export function ModelRemovableController(Base: any = Sample) {
	class AbstractBase extends ModelController(Base) {
		public readonly service;

		async validateRestoreMany(properties: object): Promise<object> {
			return properties;
		}

		async validateRestoreOne(properties: object): Promise<object> {
			return properties;
		}

		async restoreMany(properties: object): Promise<object> {
			return await this.errorHandler(async () => await this.service.restoreMany(await this.validateRestoreMany(properties)));
		}

		async restoreOne(id: string, properties: object): Promise<object> {
			return await this.errorHandler(async () => await this.service.restoreOne(await this.validateRestoreOne({ ...properties, id })));
		}
	}

	return AbstractBase;
}

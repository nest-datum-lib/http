import { ModelController } from '@nest-datum/model';
import { ModelRemovableService } from './model-removable.service';

export class ModelRemovableController extends ModelController {
	protected readonly service: ModelRemovableService;

	async validateRestoreMany(properties: object): Promise<object> {
		return properties;
	}

	async validateRestoreOne(properties: object): Promise<object> {
		return properties;
	}

	async restoreMany(properties: object): Promise<object> {
		return await this.errorHandler(async () => await this.service.restoreMany(await this.validateRestoreMany(properties)));
	}

	async restoreOne(id: string, properties: object): Promise<boolean> {
		return await this.errorHandler(async () => await this.service.restoreOne(await this.validateRestoreOne({ ...properties, id })));
	}
}

import { ModelService } from '@nest-datum/model';

export class ModelRemovableService extends ModelService {
	async dropMany(properties: object): Promise<object> {
		return {};
	}

	async dropOne(properties: object): Promise<boolean> {
		return true;
	}

	async restoreMany(properties: object): Promise<object> {
		return {};
	}

	async restoreOne(properties: object): Promise<boolean> {
		return true;
	}
}

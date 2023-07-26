import { Mixin } from 'ts-mixer';
import { ModelSqlService } from '@nest-datum/model';
import { ModelRemovableService } from './model-removable.service';

export class ModelRemovableSqlService extends Mixin(ModelSqlService, ModelRemovableService) {
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

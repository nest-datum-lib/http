import { EntityService } from './entity.service.js';
import { Entity } from './entity.js';

export class EntityController {
	async errorHandler(callback = () => {}) {
		return await callback();
	}
}

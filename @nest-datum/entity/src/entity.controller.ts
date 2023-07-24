
export class EntityController {
	async errorHandler(callback = () => {}) {
		return await callback();
	}
}

import { bool as utilsCheckBool } from "@nest-datum-utils/check";
class Sample {
}

export function ModelRemovableController(Base: any = Sample) {
	class AbstractBase extends Base {
		public readonly service;

		async validateRestoreMany(properties: object): Promise<object> {
			for (const id in properties['body']) {
				if (!utilsCheckBool(properties['body'][id]['isDeleted']))
					throw new this.ExceptionBadRequest(
						`Property "isDeleted" "${properties['body'][id]['isDeleted']} is not valid!"`
					);
				if (!utilsCheckBool(properties['body'][id]['isNotDelete']))
					throw new this.ExceptionBadRequest(
						`Property "isNotDelete" "${properties['body'][id]['isNotDelete']}" is not valid!`
					);
			}

			return properties;
		}

		async validateRestoreOne(properties: object): Promise<object> {
			if (!utilsCheckBool(properties['body']['isDeleted']))
				throw new this.ExceptionBadRequest(
					`Property "isDeleted" "${properties['body']['isDeleted']} is not valid!"`
				);
			if (!utilsCheckBool(properties['body']['isNotDelete']))
				throw new this.ExceptionBadRequest(
					`Property "isNotDelete" "${properties['body']['isNotDelete']}" is not valid!`
				);

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

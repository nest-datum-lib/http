import { exists as utilsCheckExists } from '@nest-datum-utils/check';

class Sample {
}

export function ModelDataValueController(Base: any = Sample) {
	class AbstractBase extends Base {
		public readonly validateCreateDataValueIsRequired: boolean;
		public readonly validateUpdateManyDataValueIsRequired: boolean;
		public readonly validateUpdateOneDataValueIsRequired: boolean;

		async validateCreate(properties: object): Promise<object> {
			if (this.validateCreateDataValueIsRequired
				&& !utilsCheckExists(properties['dataValue'])) {
				throw new this.ExceptionBadRequest(`Property "dataValue" "${properties['dataValue']}" is bad format.`);
			}
			return await super.validateCreate(properties);
		}

		async validateUpdateMany(properties: object): Promise<object> {
			properties = await super.validateUpdateMany(properties);

			let id;

			for (id in properties['body']) {
				if (this.validateUpdateManyDataValueIsRequired) {
					if (!utilsCheckExists(properties['body'][id]['dataValue'])) {
						throw new this.ExceptionBadRequest(`Property "dataValue" "${properties['body'][id]['dataValue']}" is bad format.`);
					}
				}
			}
			return properties;
		}

		async validateUpdateOne(properties: object): Promise<object> {
			if (this.validateUpdateOneDataValueIsRequired
				&& !utilsCheckExists(properties['dataValue'])) {
				throw new this.ExceptionBadRequest(`Property "dataValue" "${properties['dataValue']}" is bad format.`);
			}
			return await super.validateUpdateOne(properties);
		}	
	}

	return AbstractBase;
}

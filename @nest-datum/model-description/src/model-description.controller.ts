import { 
	exists as utilsCheckExists,
	strDescription as utilsCheckStrDescription, 
} from '@nest-datum-utils/check';

class Sample {
}

export function ModelDescriptionController(Base: any = Sample) {
	class AbstractBase extends Base {
		public readonly validateCreateDescriptionIsRequired: boolean;
		public readonly validateUpdateManyDescriptionIsRequired: boolean;
		public readonly validateUpdateOneDescriptionIsRequired: boolean;

		async validateCreate(properties: object): Promise<object> {
			if ((this.validateCreateDescriptionIsRequired
				|| utilsCheckExists(properties['description']))
					&& !utilsCheckStrDescription(properties['description'])) {
				throw new this.ExceptionBadRequest(`Property "description" "${properties['description']}" is bad format.`);
			}
			return await super.validateCreate(properties);
		}

		async validateUpdateMany(properties: object): Promise<object> {
			properties = await super.validateUpdateMany(properties);

			let id;

			for (id in properties['body']) {
				if ((this.validateUpdateManyDescriptionIsRequired
					|| utilsCheckExists(properties['body'][id]['description']))
						&& !utilsCheckStrDescription(properties['body'][id]['description'])) {
					throw new this.ExceptionBadRequest(`Property "description" "${properties['body'][id]['description']}" is bad format.`);
				}
			}
			return properties;
		}

		async validateUpdateOne(properties: object): Promise<object> {
			if ((this.validateUpdateOneDescriptionIsRequired
				|| utilsCheckExists(properties['description']))
					&& !utilsCheckStrDescription(properties['description'])) {
				throw new this.ExceptionBadRequest(`Property "description" "${properties['description']}" is bad format.`);
			}
			return await super.validateUpdateOne(properties);
		}
	}

	return AbstractBase;
}

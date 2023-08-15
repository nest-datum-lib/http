import { 
	exists as utilsCheckExists,
	strName as utilsCheckStrName, 
} from '@nest-datum-utils/check';

class Sample {
}

export function ModelNameController(Base: any = Sample) {
	class AbstractBase extends Base {
		public readonly validateCreateNameIsRequired: boolean;
		public readonly validateUpdateManyNameIsRequired: boolean;
		public readonly validateUpdateOneNameIsRequired: boolean;

		async validateCreate(properties: object): Promise<object> {
			if ((this.validateCreateNameIsRequired
				|| utilsCheckExists(properties['name']))
					&& !utilsCheckStrName(properties['name'])) {
				throw new this.ExceptionBadRequest(`Property "name" "${properties['name']}" is bad format.`);
			}
			return await super.validateCreate(properties);
		}

		async validateUpdateMany(properties: object): Promise<object> {
			properties = await super.validateUpdateMany(properties);

			if ((this.validateUpdateManyNameIsRequired
				|| utilsCheckExists((properties['body'] || {})['name']))
					&& !utilsCheckStrName((properties['body'] || {})['name'])) {
				throw new this.ExceptionBadRequest(`Property "name" "${(properties['body'] || {})['name']}" is bad format.`);
			}
			return properties;
		}

		async validateUpdateOne(properties: object): Promise<object> {
			if ((this.validateUpdateOneNameIsRequired
				|| utilsCheckExists(properties['name']))
					&& !utilsCheckStrName(properties['name'])) {
				throw new this.ExceptionBadRequest(`Property "name" "${properties['name']}" is bad format.`);
			}
			return await super.validateUpdateOne(properties);
		}
	}

	return AbstractBase;
}

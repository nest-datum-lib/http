import { 
	exists as utilsCheckExists,
	strFilled as utilsCheckStrFilled, 
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
					&& !(utilsCheckStrFilled(properties['name']) 
						&& properties['name'].length <= 255)) {
				throw new this.ExceptionBadRequest(`Property "name" "${name}" is bad format.`);
			}
			return await super.validateCreate(properties);
		}

		async validateUpdateMany(properties: object): Promise<object> {
			properties = await super.validateUpdateMany(properties);

			let id;

			for (id in properties['body']) {
				if ((this.validateUpdateManyNameIsRequired
					|| utilsCheckExists(properties['body'][id]['name']))
						&& !utilsCheckStrFilled(properties['body'][id]['name'])) {
					throw new this.ExceptionBadRequest(`Property "name" "${properties['body'][id]['name']}" is bad format.`);
				}
			}
			return properties;
		}

		async validateUpdateOne(properties: object): Promise<object> {
			if ((this.validateUpdateOneNameIsRequired
				|| utilsCheckExists(properties['name']))
					&& !(utilsCheckStrFilled(properties['name']) 
						&& properties['name'].length <= 255)) {
				throw new this.ExceptionBadRequest(`Property "name" "${name}" is bad format.`);
			}
			return await super.validateUpdateOne(properties);
		}
	}

	return AbstractBase;
}

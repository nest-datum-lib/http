import {
	exists as utilsCheckExists,
	strId as utilsCheckStrId,
} from '@nest-datum-utils/check';

class Sample {
}

export function ModelDataTypeController(Base: any = Sample) {
	class AbstractBase extends Base {
		public readonly validateCreateDataTypeIdIsRequired: boolean;
		public readonly validateUpdateManyDataTypeIdIsRequired: boolean;
		public readonly validateUpdateOneDataTypeIdIsRequired: boolean;

		async validateCreate(properties: object): Promise<object> {
			if ((this.validateCreateDataTypeIdIsRequired
				|| utilsCheckExists(properties['dataTypeId']))
					&& !utilsCheckStrId(properties['dataTypeId'])) {
				throw new this.ExceptionBadRequest(`Property "dataTypeId" "${properties['dataTypeId']}" is bad format.`);
			}
			return await super.validateCreate(properties);
		}

		async validateUpdateMany(properties: object): Promise<object> {
			properties = await super.validateUpdateMany(properties);

			let id;

			for (id in properties['body']) {
				if ((this.validateUpdateManyDataTypeIdIsRequired
					|| utilsCheckExists(properties['body'][id]['dataTypeId']))
						&& !utilsCheckStrId(properties['body'][id]['dataTypeId'])) {
					throw new this.ExceptionBadRequest(`Property "dataTypeId" "${properties['body'][id]['dataTypeId']}" is bad format.`);
				}
			}
			return properties;
		}

		async validateUpdateOne(properties: object): Promise<object> {
			if ((this.validateUpdateOneDataTypeIdIsRequired
				|| utilsCheckExists(properties['dataTypeId']))
					&& !utilsCheckStrId(properties['dataTypeId'])) {
				throw new this.ExceptionBadRequest(`Property "dataTypeId" "${properties['dataTypeId']}" is bad format.`);
			}
			return await super.validateUpdateOne(properties);
		}
	}

	return AbstractBase;
}

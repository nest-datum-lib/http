import {
	exists as utilsCheckExists,
	strId as utilsCheckStrId,
} from '@nest-datum-utils/check';

class Sample {
}

export function ModelDataTypeController(Base: any = Sample) {
	class AbstractBase extends Base {
		async validateCreate(properties: object): Promise<object> {
			if (utilsCheckExists(properties['dataTypeId'])
				&& !utilsCheckStrId(properties['dataTypeId'])) {
				throw new this.ExceptionBadRequest(`dataTypeId value "${properties['id']}" is bad format.`);
			}
			return properties;
		}
	}

	return AbstractBase;
}

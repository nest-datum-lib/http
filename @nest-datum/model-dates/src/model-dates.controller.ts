import { ExceptionHttpBadRequest } from '@nest-datum/exception-http';
import { 
	exists as utilsCheckExists,
	strArr as utilsCheckStrArr, 
} from '@nest-datum-utils/check';

class Sample {
}

export function ModelDatesController(Base: any = Sample) {
	class AbstractBase extends Base {
		async validateGetMany(properties: object): Promise<object> {
			if (utilsCheckExists(properties['orderBy'])) {
				if (!utilsCheckStrArr(properties['orderBy'])) {
					throw new (ExceptionHttpBadRequest())(`OrderBy value "${properties['orderBy']}" is bad format.`);
				}
				properties['orderBy'] = JSON.parse(properties['orderBy']);
			}
			return await super.validateGetMany(properties);
		}
	}

	return AbstractBase;
}

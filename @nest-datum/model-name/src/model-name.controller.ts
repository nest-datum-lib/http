import { ExceptionHttpBadRequest } from '@nest-datum/exception-http';
import { strFilled as utilsCheckStrFilled } from '@nest-datum-utils/check';

class Sample {
}

export function ModelNameController(Base: any = Sample) {
	class AbstractBase extends Base {
		public readonly validateCreateNameIsRequired: boolean;

		async validateCreate(properties: object): Promise<object> {
			if (this.validateCreateNameIsRequired) {
				if (!(utilsCheckStrFilled(properties['name'])
					&& properties['name'].length <= 255)) {
					// throw new (ExceptionHttpBadRequest())(`Name value "${name}" is bad format.`);
				}
			}
			return await super.validateCreate(properties);
		}
	}

	return AbstractBase;
}

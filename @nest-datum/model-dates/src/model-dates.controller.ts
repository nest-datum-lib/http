import { ExceptionHttpBadRequest } from '@nest-datum/exception-http';
import { 
	exists as utilsCheckExists,
	strDate as utilsCheckStrDate, 
} from '@nest-datum-utils/check';

class Sample {
}

export function ModelDatesController(Base: any = Sample) {
	class AbstractBase extends Base {
		public readonly validateCreateCreatedAtIsRequired: boolean;
		public readonly validateUpdateManyCreatedAtIsRequired: boolean;
		public readonly validateUpdateOneCreatedAtIsRequired: boolean;
		public readonly validateCreateUpdatedAtIsRequired: boolean;
		public readonly validateUpdateManyUpdatedAtIsRequired: boolean;
		public readonly validateUpdateOneUpdatedAtIsRequired: boolean;

		async validateCreate(properties: object): Promise<object> {
			if ((this.validateCreateCreatedAtIsRequired
				|| utilsCheckExists(properties['createdAt']))
					&& !utilsCheckStrDate(properties['createdAt'])) {
				throw new this.ExceptionBadRequest(`Property "createdAt" "${properties['createdAt']}" is bad format.`);
			}
			if ((this.validateCreateUpdatedAtIsRequired
				|| utilsCheckExists(properties['updatedAt']))
					&& !utilsCheckStrDate(properties['updatedAt'])) {
				throw new this.ExceptionBadRequest(`Property "updatedAt" "${properties['updatedAt']}" is bad format.`);
			}
			return await super.validateCreate(properties);
		}

		async validateUpdateMany(properties: object): Promise<object> {
			properties = await super.validateUpdateMany(properties);

			let id;

			for (id in properties['body']) {
				if ((this.validateUpdateManyCreatedAtIsRequired
					|| utilsCheckExists(properties['body'][id]['createdAt']))
						&& !utilsCheckStrDate(properties['body'][id]['createdAt'])) {
					throw new this.ExceptionBadRequest(`Property "createdAt" "${properties['body'][id]['createdAt']}" is bad format.`);
				}
				if ((this.validateUpdateManyUpdatedAtIsRequired
					|| utilsCheckExists(properties['body'][id]['updatedAt']))
						&& !utilsCheckStrDate(properties['body'][id]['updatedAt'])) {
					throw new this.ExceptionBadRequest(`Property "updatedAt" "${properties['body'][id]['updatedAt']}" is bad format.`);
				}
			}
			return properties;
		}

		async validateUpdateOne(properties: object): Promise<object> {
			if ((this.validateUpdateOneCreatedAtIsRequired
				|| utilsCheckExists(properties['createdAt']))
					&& !utilsCheckStrDate(properties['createdAt'])) {
				throw new this.ExceptionBadRequest(`Property "createdAt" "${properties['createdAt']}" is bad format.`);
			}
			if ((this.validateUpdateOneUpdatedAtIsRequired
				|| utilsCheckExists(properties['updatedAt']))
					&& !utilsCheckStrDate(properties['updatedAt'])) {
				throw new this.ExceptionBadRequest(`Property "updatedAt" "${properties['updatedAt']}" is bad format.`);
			}
			return await super.validateUpdateOne(properties);
		}
	}

	return AbstractBase;
}

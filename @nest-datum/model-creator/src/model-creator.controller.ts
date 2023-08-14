import {
	exists as utilsCheckExists,
	strId as utilsCheckStrId,
} from '@nest-datum-utils/check';

class Sample {
}

export function ModelCreatorController(Base: any = Sample) {
	class AbstractBase extends Base {
		public readonly validateCreateCreatorIdIsRequired: boolean;
		public readonly validateUpdateManyCreatorIdIsRequired: boolean;
		public readonly validateUpdateOneCreatorIdIsRequired: boolean;

		async validateCreate(properties: object): Promise<object> {
			if ((this.validateCreateCreatorIdIsRequired
				|| utilsCheckExists(properties['creatorId']))
					&& !utilsCheckStrId(properties['creatorId'])) {
				throw new this.ExceptionBadRequest(`Property "creatorId" "${properties['creatorId']}" is bad format.`);
			}
			return await super.validateCreate(properties);
		}

		async validateUpdateMany(properties: object): Promise<object> {
			properties = await super.validateUpdateMany(properties);

			if ((this.validateUpdateManyCreatorIdIsRequired
				|| utilsCheckExists((properties['body'] || {})['creatorId']))
					&& !utilsCheckStrId((properties['body'] || {})['creatorId'])) {
				throw new this.ExceptionBadRequest(`Property "creatorId" "${(properties['body'] || {})['creatorId']}" is bad format.`);
			}
			return properties;
		}

		async validateUpdateOne(properties: object): Promise<object> {
			if ((this.validateUpdateOneCreatorIdIsRequired
				|| utilsCheckExists(properties['creatorId']))
					&& !utilsCheckStrId(properties['creatorId'])) {
				throw new this.ExceptionBadRequest(`Property "creatorId" "${properties['creatorId']}" is bad format.`);
			}
			return await super.validateUpdateOne(properties);
		}
	}

	return AbstractBase;
}

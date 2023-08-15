import { 
	exists as utilsCheckExists,
	strEnv as utilsCheckStrEnv, 
} from '@nest-datum-utils/check';

class Sample {
}

export function ModelEnvController(Base: any = Sample) {
	class AbstractBase extends Base {
		public readonly service;
		public readonly validateCreateEnvIsRequired: boolean;
		public readonly validateUpdateManyEnvIsRequired: boolean;
		public readonly validateUpdateOneEnvIsRequired: boolean;

		async validateCreate(properties: object): Promise<object> {
			if ((this.validateCreateEnvIsRequired
				|| utilsCheckExists(properties['envKey']))
					&& !utilsCheckStrEnv(properties['envKey'])) {
				throw new this.ExceptionBadRequest(`Property "envKey" "${properties['envKey']}" is bad format.`);
			}
			return await super.validateCreate(properties);
		}

		async validateUpdateMany(properties: object): Promise<object> {
			properties = await super.validateUpdateMany(properties);

			if ((this.validateUpdateManyEnvIsRequired
				|| utilsCheckExists((properties['body'] || {})['envKey']))
					&& !utilsCheckStrEnv((properties['body'] || {})['envKey'])) {
				throw new this.ExceptionBadRequest(`Property "envKey" "${(properties['body'] || {})['envKey']}" is bad format.`);
			}
			return properties;
		}

		async validateUpdateOne(properties: object): Promise<object> {
			if ((this.validateUpdateOneEnvIsRequired
				|| utilsCheckExists(properties['envKey']))
					&& !utilsCheckStrEnv(properties['envKey'])) {
				throw new this.ExceptionBadRequest(`Property "envKey" "${properties['envKey']}" is bad format.`);
			}
			return await super.validateUpdateOne(properties);
		}
	}

	return AbstractBase;
}

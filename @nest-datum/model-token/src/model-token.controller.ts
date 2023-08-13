import { checkToken } from '@nest-datum/jwt';
import { exists as utilsCheckExists } from '@nest-datum-utils/check';

class Sample {
}

export function ModelTokenController(Base: any = Sample) {
	class AbstractBase extends Base {
		public readonly validateGetManyTokenIsRequired: boolean;
		public readonly validateGetOneTokenIsRequired: boolean;
		public readonly validateCreateTokenIsRequired: boolean;
		public readonly validateUpdateManyTokenIsRequired: boolean;
		public readonly validateUpdateOneTokenIsRequired: boolean;
		public readonly validateDropManyTokenIsRequired: boolean;
		public readonly validateDropOneTokenIsRequired: boolean;

		async provideToken(properties: object): Promise<object> {
			if (!utilsCheckExists(properties['accessToken'])) {
				throw new this.ExceptionBadRequest(`Property "accessToken" "${properties['accessToken']}" is not valid.`);
			}
			let authedUser = {};

			if (properties['accessToken']) {
				authedUser = checkToken(properties['accessToken']);

				if (!authedUser) {
					throw new this.ExceptionUnauthorized(`Property "accessToken" "${properties['accessToken']}" is not valid.`);
				}
			}
			return { ...properties, authedUser };
		}

		async validateGetMany(properties: object): Promise<object> {
			return await super.validateGetMany((this.validateGetManyTokenIsRequired ?? true)
				? await this.provideToken(properties)
				: properties);
		}

		async validateGetOne(properties: object): Promise<object> {
			return await super.validateGetOne((this.validateGetOneTokenIsRequired ?? true)
				? await this.provideToken(properties)
				: properties);
		}

		async validateCreate(properties: object): Promise<object> {
			return await super.validateCreate((this.validateCreateTokenIsRequired ?? true)
				? await this.provideToken(properties)
				: properties);
		}

		async validateUpdateMany(properties: object): Promise<object> {
			return await super.validateUpdateMany((this.validateUpdateManyTokenIsRequired ?? true)
				? await this.provideToken(properties)
				: properties);
		}

		async validateUpdateOne(properties: object): Promise<object> {
			return await super.validateUpdateOne((this.validateUpdateOneTokenIsRequired ?? true)
				? await this.provideToken(properties)
				: properties);
		}

		async validateDropMany(properties: object): Promise<object> {
			return await super.validateDropMany((this.validateDropManyTokenIsRequired ?? true)
				? await this.provideToken(properties)
				: properties);
		}

		async validateDropOne(properties: object): Promise<object> {
			return await super.validateDropOne((this.validateDropOneTokenIsRequired ?? true)
				? await this.provideToken(properties)
				: properties);
		}
	}

	return AbstractBase;
}

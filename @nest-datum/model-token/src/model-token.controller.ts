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
				console.log('PROVIDE TOKEN PROPS:', properties);
				authedUser = checkToken(properties['accessToken']);

				if (!authedUser) {
					throw new this.ExceptionUnauthorized(`Property "accessToken" "${properties['accessToken']}" is not valid.`);
				}
			}
			return authedUser;
		}

		async validateGetMany(properties: object): Promise<object> {
			return {
				...await super.validateGetMany(properties),
				...(this.validateGetManyTokenIsRequired ?? true)
					? { authedUser: await this.provideToken(properties) }
					: {},
			};
		}

		async validateGetOne(properties: object): Promise<object> {
			return {
				...await super.validateGetOne(properties),
				...(this.validateGetOneTokenIsRequired ?? true)
					? { authedUser: await this.provideToken(properties) }
					: {},
			};
		}

		async validateCreate(properties: object): Promise<object> {
			return {
				...await super.validateCreate(properties),
				...(this.validateCreateTokenIsRequired ?? true)
					? { authedUser: await this.provideToken(properties) }
					: {},
			};
		}

		async validateUpdateMany(properties: object): Promise<object> {
			return {
				...await super.validateUpdateMany(properties),
				...(this.validateUpdateManyTokenIsRequired ?? true)
					? { authedUser: await this.provideToken(properties) }
					: {},
			};
		}

		async validateUpdateOne(properties: object): Promise<object> {
			return {
				...await super.validateUpdateOne(properties),
				...(this.validateUpdateOneTokenIsRequired ?? true)
					? { authedUser: await this.provideToken(properties) }
					: {},
			};
		}

		async validateDropMany(properties: object): Promise<object> {
			return {
				...await super.validateDropMany(properties),
				...(this.validateDropManyTokenIsRequired ?? true)
					? { authedUser: await this.provideToken(properties) }
					: {},
			};
		}

		async validateDropOne(properties: object): Promise<object> {
			return {
				...await super.validateDropOne(properties),
				...(this.validateDropOneTokenIsRequired ?? true)
					? { authedUser: await this.provideToken(properties) }
					: {},
			};
		}
	}

	return AbstractBase;
}

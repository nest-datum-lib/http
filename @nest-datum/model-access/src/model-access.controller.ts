import {
	exists as utilsCheckExists,
	objFilled as utilsCheckObjFilled,
	strId as utilsCheckStrId,
} from '@nest-datum-utils/check';

class Sample {
}

export function ModelAccessController(Base: any = Sample) {
	class AbstractBase extends Base {
		public readonly validateGetManyAccessIsRequired: boolean;
		public readonly validateGetOneAccessIsRequired: boolean;
		public readonly validateCreateAccessIsRequired: boolean;
		public readonly validateUpdateManyAccessIsRequired: boolean;
		public readonly validateUpdateOneAccessIsRequired: boolean;
		public readonly validateDropManyAccessIsRequired: boolean;
		public readonly validateDropOneAccessIsRequired: boolean;

		async checkRoleIdExists(properties: object): Promise<object> {
			if (!utilsCheckStrId((properties['authedUser'] || {})['roleId'])) {
				throw new this.ExceptionBadRequest(`Property "roleId" "${(properties['authedUser'] || {})['roleId']}" is bad format.`);
			}
			return properties;
		}

		async checkRoleIdByAccessId(authedUser: object, accessId: string): Promise<boolean> {
			return false;
		}

		async validateGetMany(properties: object): Promise<object> {
			properties = await super.validateGetMany(properties);

			if (this.validateGetManyAccessIsRequired
				|| utilsCheckObjFilled(properties['authedUser'])) {
				properties = await this.checkRoleIdExists(properties);

				if (!await this.checkRoleIdByAccessId(properties['authedUser'], `get-many`)) {
					throw new this.ExceptionForbidden(`Role of current user do not match permissions of current operation.`);
				}
			}
			return properties;
		}

		async validateGetOne(properties: object): Promise<object> {
			properties = await super.validateGetOne(properties);

			if (this.validateGetOneAccessIsRequired
				|| utilsCheckObjFilled(properties['authedUser'])) {
				properties = await this.checkRoleIdExists(properties);

				if (!await this.checkRoleIdByAccessId(properties['authedUser'], `get-one`)) {
						throw new this.ExceptionForbidden(`Role of current user do not match permissions of current operation.`);
				}
			}
			return properties;
		}

		async validateCreate(properties: object): Promise<object> {
			properties = await super.validateCreate(properties);

			if (this.validateCreateAccessIsRequired
				|| utilsCheckObjFilled(properties['authedUser'])) {
				properties = await this.checkRoleIdExists(properties);

				if (!await this.checkRoleIdByAccessId(properties['authedUser'], `create`)) {
						throw new this.ExceptionForbidden(`Role of current user do not match permissions of current operation.`);
				}
			}
			return properties;
		}

		async validateUpdateMany(properties: object): Promise<object> {
			properties = await super.validateUpdateMany(properties);

			if (this.validateUpdateManyAccessIsRequired
				|| utilsCheckObjFilled(properties['authedUser'])) {
				properties = await this.checkRoleIdExists(properties);

				if (!await this.checkRoleIdByAccessId(properties['authedUser'], `update-many`)) {
						throw new this.ExceptionForbidden(`Role of current user do not match permissions of current operation.`);
				}
			}
			return properties;
		}

		async validateUpdateOne(properties: object): Promise<object> {
			properties = await super.validateUpdateOne(properties);

			if (this.validateUpdateOneAccessIsRequired
				|| utilsCheckObjFilled(properties['authedUser'])) {
				properties = await this.checkRoleIdExists(properties);

				if (!await this.checkRoleIdByAccessId(properties['authedUser'], `update-one`)) {
						throw new this.ExceptionForbidden(`Role of current user do not match permissions of current operation.`);
				}
			}
			return properties;
		}

		async validateDropMany(properties: object): Promise<object> {
			properties = await super.validateDropMany(properties);

			if (this.validateDropManyAccessIsRequired
				|| utilsCheckObjFilled(properties['authedUser'])) {
				properties = await this.checkRoleIdExists(properties);

				if (!await this.checkRoleIdByAccessId(properties['authedUser'], `drop-many`)) {
						throw new this.ExceptionForbidden(`Role of current user do not match permissions of current operation.`);
				}
			}
			return properties;
		}

		async validateDropOne(properties: object): Promise<object> {
			properties = await super.validateDropOne(properties);

			if (this.validateDropOneAccessIsRequired
				|| utilsCheckObjFilled(properties['authedUser'])) {
				properties = await this.checkRoleIdExists(properties);

				if (!await this.checkRoleIdByAccessId(properties['authedUser'], `drop-one`)) {
						throw new this.ExceptionForbidden(`Role of current user do not match permissions of current operation.`);
				}
			}
			return properties;
		}
	}

	return AbstractBase;
}

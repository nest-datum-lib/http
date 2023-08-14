import {
	exists as utilsCheckExists,
	strId as utilsCheckStrId,
} from '@nest-datum-utils/check';

class Sample {
}

export function AccessRoleController(Base: any = Sample) {
	class AbstractBase extends Base {
		public readonly validateCreateAccessIdIsRequired: boolean = true;
		public readonly validateCreateRoleIdIsRequired: boolean = true;
		public readonly validateUpdateManyAccessIdIsRequired: boolean = true;
		public readonly validateUpdateManyRoleIdIsRequired: boolean = true;
		public readonly validateUpdateOneAccessIdIsRequired: boolean = true;
		public readonly validateUpdateOneRoleIdIsRequired: boolean = true;

		async validateCreate(properties: object): Promise<object> {
			if ((this.validateCreateAccessIdIsRequired
				|| utilsCheckExists(properties['accessId']))
					&& !utilsCheckStrId(properties['accessId'])) {
				throw new this.ExceptionBadRequest(`Property "accessId" "${properties['accessId']}" is bad format.`);
			}
			if ((this.validateCreateRoleIdIsRequired
				|| utilsCheckExists(properties['roleId']))
					&& !utilsCheckStrId(properties['roleId'])) {
				throw new this.ExceptionBadRequest(`Property "roleId" "${properties['roleId']}" is bad format.`);
			}
			return await super.validateCreate(properties);
		}

		async validateUpdateMany(properties: object): Promise<object> {
			properties = await super.validateUpdateMany(properties);

			let id;

			for (id in properties['body']) {
				if ((this.validateUpdateManyAccessIdIsRequired
					|| utilsCheckExists(properties['body'][id]['accessId']))
						&& !utilsCheckStrId(properties['body'][id]['accessId'])) {
					throw new this.ExceptionBadRequest(`Property "accessId" "${properties['body'][id]['accessId']}" is bad format.`);
				}
				if ((this.validateUpdateManyRoleIdIsRequired
					|| utilsCheckExists(properties['body'][id]['roleId']))
						&& !utilsCheckStrId(properties['body'][id]['roleId'])) {
					throw new this.ExceptionBadRequest(`Property "roleId" "${properties['body'][id]['roleId']}" is bad format.`);
				}
			}
			return properties;
		}

		async validateUpdateOne(properties: object): Promise<object> {
			if ((this.validateUpdateOneAccessIdIsRequired
				|| utilsCheckExists(properties['accessId']))
					&& !utilsCheckStrId(properties['accessId'])) {
				throw new this.ExceptionBadRequest(`Property "accessId" "${properties['accessId']}" is bad format.`);
			}
			if ((this.validateUpdateOneRoleIdIsRequired
				|| utilsCheckExists(properties['roleId']))
					&& !utilsCheckStrId(properties['roleId'])) {
				throw new this.ExceptionBadRequest(`Property "roleId" "${properties['roleId']}" is bad format.`);
			}
			return await super.validateUpdateOne(properties);
		}
	}

	return AbstractBase;
}


class Sample {
}

export function SettingController(Base: any = Sample) {
	class AbstractBase extends Base {
		public readonly validateGetManyTokenIsRequired: boolean = true;
		public readonly validateGetOneTokenIsRequired: boolean = true;
		public readonly validateCreateTokenIsRequired: boolean = true;
		public readonly validateUpdateManyTokenIsRequired: boolean = true;
		public readonly validateUpdateOneTokenIsRequired: boolean = true;
		public readonly validateDropManyTokenIsRequired: boolean = true;
		public readonly validateDropOneTokenIsRequired: boolean = true;

		public readonly validateGetManyAccessIsRequired: boolean = true;
		public readonly validateGetOneAccessIsRequired: boolean = true;
		public readonly validateCreateAccessIsRequired: boolean = true;
		public readonly validateUpdateManyAccessIsRequired: boolean = true;
		public readonly validateUpdateOneAccessIsRequired: boolean = true;
		public readonly validateDropManyAccessIsRequired: boolean = true;
		public readonly validateDropOneAccessIsRequired: boolean = true;

		public readonly validateCreateNameIsRequired: boolean = true;
		public readonly validateCreateDataTypeIdIsRequired: boolean = true;
	}

	return AbstractBase;
}


class Sample {
}

export function SettingController(Base: any = Sample) {
	class AbstractBase extends Base {
		public readonly validateCreateNameIsRequired: boolean = true;
		public readonly validateCreateDataTypeIdIsRequired: boolean = true;
	}

	return AbstractBase;
}

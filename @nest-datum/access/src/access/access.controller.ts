
class Sample {
}

export function AccessController(Base: any = Sample) {
	class AbstractBase extends Base {
		public readonly validateCreateNameIsRequired: boolean = true;

		public readonly validateGetManyAccessIsRequired: boolean = true;
		public readonly validateGetOneAccessIsRequired: boolean = true;
		public readonly validateCreateAccessIsRequired: boolean = true;
		public readonly validateUpdateManyAccessIsRequired: boolean = true;
		public readonly validateUpdateOneAccessIsRequired: boolean = true;
		public readonly validateDropManyAccessIsRequired: boolean = true;
		public readonly validateDropOneAccessIsRequired: boolean = true;
	}

	return AbstractBase;
}

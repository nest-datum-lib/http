
class Sample {
}

export function AccessController(Base: any = Sample) {
	class AbstractBase extends Base {
		public readonly validateCreateNameIsRequired: boolean = true;
	}

	return AbstractBase;
}

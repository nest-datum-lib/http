
class Sample {
}

export function ModelCreatorController(Base: any = Sample) {
	class AbstractBase extends Base {
	}

	return AbstractBase;
}

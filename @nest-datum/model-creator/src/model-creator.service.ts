
class Sample {
}

export function ModelCreatorService(Base: any = Sample) {
	class AbstractBase extends Base {
	}

	return AbstractBase;
}

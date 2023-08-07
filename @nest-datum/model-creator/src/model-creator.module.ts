
class Sample {
}

export function ModelCreatorModule(Base: any = Sample) {
	class AbstractBase extends Base {
	}

	return AbstractBase;
}


class Sample {
}

export function ModelDescriptionModule(Base: any = Sample) {
	class AbstractBase extends Base {
	}

	return AbstractBase;
}


class Sample {
}

export function ModelDescriptionService(Base: any = Sample) {
	class AbstractBase extends Base {
	}

	return AbstractBase;
}

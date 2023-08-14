
class Sample {
}

export function ModelAccessModule(Base: any = Sample) {
	class AbstractBase extends Base {
	}

	return AbstractBase;
}


class Sample {
}

export function ModelAccessService(Base: any = Sample) {
	class AbstractBase extends Base {
	}

	return AbstractBase;
}

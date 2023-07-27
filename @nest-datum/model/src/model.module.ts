
class Sample {
}

export function ModelModule(Base: any = Sample) {
	class AbstractBase extends Base {
	}

	return AbstractBase;
}


class Sample {
}

export function ModelNameModule(Base: any = Sample) {
	class AbstractBase extends Base {
	}

	return AbstractBase;
}


class Sample {
}

export function ModelNameService(Base: any = Sample) {
	class AbstractBase extends Base {
	}

	return AbstractBase;
}


class Sample {
}

export function AccessModule(Base: any = Sample) {
	class AbstractBase extends Base {
	}

	return AbstractBase;
}

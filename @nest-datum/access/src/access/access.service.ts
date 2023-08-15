
class Sample {
}

export function AccessService(Base: any = Sample) {
	class AbstractBase extends Base {
	}

	return AbstractBase;
}

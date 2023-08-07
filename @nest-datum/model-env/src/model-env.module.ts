
class Sample {
}

export function ModelEnvModule(Base: any = Sample) {
	class AbstractBase extends Base {
	}

	return AbstractBase;
}


class Sample {
}

export function ModelEnvService(Base: any = Sample) {
	class AbstractBase extends Base {
	}

	return AbstractBase;
}

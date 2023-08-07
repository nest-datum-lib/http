
class Sample {
}

export function ModelDataTypeController(Base: any = Sample) {
	class AbstractBase extends Base {
	}

	return AbstractBase;
}

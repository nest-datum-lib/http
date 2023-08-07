
class Sample {
}

export function ModelDataTypeService(Base: any = Sample) {
	class AbstractBase extends Base {
	}

	return AbstractBase;
}

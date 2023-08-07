
class Sample {
}

export function ModelDescriptionController(Base: any = Sample) {
	class AbstractBase extends Base {
	}

	return AbstractBase;
}

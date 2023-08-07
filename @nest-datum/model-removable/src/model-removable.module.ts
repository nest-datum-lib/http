
class Sample {
}

export function ModelRemovableModule(Base: any = Sample) {
	class AbstractBase extends Base {
	}

	return AbstractBase;
}

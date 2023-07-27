
class Sample {
}

export function ModelRemovable(Base: any = Sample) {
	class AbstractBase extends Base {
	}

	return AbstractBase;
};

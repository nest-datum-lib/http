
class Sample {}

export function ModelRemovable(Base: any = Sample) {
	abstract class AbstractBase extends Base {
	}

	return AbstractBase;
};

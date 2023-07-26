
class Sample {}

export function ModelRemovableToken(Base: any = Sample) {
	abstract class AbstractBase extends Base {
	}

	return AbstractBase;
};

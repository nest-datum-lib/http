
class Sample {}

export function ModelToken(Base: any = Sample) {
	abstract class AbstractBase extends Base {
	}

	return AbstractBase;
};


class Sample {}

export function ModelEnv(Base: any = Sample) {
	abstract class AbstractBase extends Base {
	}

	return AbstractBase;
};

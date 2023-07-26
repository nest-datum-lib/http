
class Sample {}

export function ModelUser(Base: any = Sample) {
	abstract class AbstractBase extends Base {
	}

	return AbstractBase;
};

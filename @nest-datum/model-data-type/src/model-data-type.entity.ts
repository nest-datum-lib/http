
class Sample {}

export function ModelDataType(Base: any = Sample) {
	abstract class AbstractBase extends Base {
	}

	return AbstractBase;
};

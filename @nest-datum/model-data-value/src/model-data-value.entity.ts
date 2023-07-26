
class Sample {}

export function ModelDataValue(Base: any = Sample) {
	abstract class AbstractBase extends Base {
	}

	return AbstractBase;
};

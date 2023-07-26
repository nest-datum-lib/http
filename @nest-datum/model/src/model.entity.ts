class Sample {}

export function Model(Base: any = Sample) {
	abstract class AbstractBase extends Base {
	};

	return AbstractBase;
};

class Sample {}

export function Model(Base: any = Sample) {
	class AbstractBase extends Base {
	};

	return AbstractBase;
};

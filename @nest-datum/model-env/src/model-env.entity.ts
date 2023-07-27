
class Sample {
}

export function ModelEnv(Base: any = Sample) {
	class AbstractBase extends Base {
	}

	return AbstractBase;
};

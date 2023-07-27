
class Sample {
}

export function ModelToken(Base: any = Sample) {
	class AbstractBase extends Base {
	}

	return AbstractBase;
};

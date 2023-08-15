
class Sample {
}

export function ModelSqlManyToOneService(Base: any = Sample) {
	class AbstractBase extends Base {
	}

	return AbstractBase;
}

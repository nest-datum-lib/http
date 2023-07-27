import { ModelModule } from '@nest-datum/model';

class Sample {
}

export function ModelTokenModule(Base: any = Sample) {
	class AbstractBase extends ModelModule(Base) {
	}

	return AbstractBase;
}

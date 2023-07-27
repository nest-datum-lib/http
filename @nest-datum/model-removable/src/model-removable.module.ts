import { ModelModule } from '@nest-datum/model';

class Sample {
}

export function ModelRemovableModule(Base: any = Sample) {
	class AbstractBase extends ModelModule(Base) {
	}

	return AbstractBase;
}

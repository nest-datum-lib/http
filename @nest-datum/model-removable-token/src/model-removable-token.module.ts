import { ModelRemovableModule } from '@nest-datum/model-removable';

class Sample {
}

export function ModelRemovableTokenModule(Base: any = Sample) {
	class AbstractBase extends ModelRemovableModule(Base) {
	}

	return AbstractBase;
}

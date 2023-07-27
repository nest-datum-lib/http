import { ModelHttpController } from '@nest-datum/model';
import { ModelUserController } from './model-user.controller';

class Sample {
}

export function ModelUserHttpController(Base: any = Sample) {
	class AbstractBase extends ModelHttpController(ModelUserController(Base)) {
	}

	return AbstractBase;
};

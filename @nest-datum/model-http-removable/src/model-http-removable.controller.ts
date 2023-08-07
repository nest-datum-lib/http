import { 
	Delete,
	Put, 
	Query,
	Param,
} from '@nestjs/common';
import { ModelRemovableController } from '@nest-datum/model-removable';

class Sample {
}

export function ModelHttpRemovableController(Base: any = Sample) {
	class AbstractBase extends ModelRemovableController(Base) {
		@Put()
		async restoreMany(@Query() properties: object): Promise<object> {
			return await super.dropMany(properties);
		}

		@Put(':id')
		async restoreOne(@Param('id') id: string, @Query() properties: object): Promise<object> {
			return await super.dropOne(id, properties);
		}
	}

	return AbstractBase;
}

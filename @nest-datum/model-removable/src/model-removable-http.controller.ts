import { 
	Delete,
	Put, 
	Query,
	Param,
} from '@nestjs/common';
import { ModelRemovableController } from './model-removable.controller';

export class ModelRemovableHttpController extends ModelRemovableController {
	@Delete()
	async dropMany(@Query() properties: object): Promise<object> {
		return await super.dropMany(properties);
	}

	@Delete(':id')
	async dropOne(@Param('id') id: string, @Query() properties: object): Promise<boolean> {
		return await super.dropOne(id, properties);
	}

	@Put()
	async restoreMany(@Query() properties: object): Promise<object> {
		return await super.dropMany(properties);
	}

	@Put(':id')
	async restoreOne(@Param('id') id: string, @Query() properties: object): Promise<boolean> {
		return await super.dropOne(id, properties);
	}
}

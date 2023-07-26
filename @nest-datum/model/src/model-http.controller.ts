import { 
	Get, 
	Post,
	Patch,
	Delete,
	Query,
	Param,
	Body,
} from '@nestjs/common';
import { ModelController } from './model.controller';

export class ModelHttpController extends ModelController {
	@Get()
	async getMany(@Query() properties: object): Promise<Array<Array<any> | number>> {
		return await super.getMany(properties);
	}

	@Get(':id')
	async getOne(@Param('id') id: string, @Query() properties: object): Promise<object> {
		return await super.getOne(id, properties);
	}

	@Post()
	async create(@Body() properties: object): Promise<object> {
		return await super.create(properties);
	}

	@Patch()
	async updateMany(@Body() properties: object): Promise<Array<any>> {
		return await super.updateMany(properties);
	}

	@Patch(':id')
	async updateOne(@Param('id') id: string, @Body() properties: object): Promise<object> {
		return await super.updateOne(id, properties);
	}

	@Delete()
	async dropMany(@Query() properties: object): Promise<object> {
		return await super.dropMany(properties);
	}

	@Delete(':id')
	async dropOne(@Param('id') id: string, @Query() properties: object): Promise<boolean> {
		return await super.dropOne(id, properties);
	}
}

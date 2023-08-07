import { 
	Get, 
	Post,
	Patch,
	Delete,
	Query,
	Param,
	Body,
} from '@nestjs/common';
import { ModelController } from '@nest-datum/model';

class Sample {
}

export function ModelHttpController(Base: any = Sample) {
	class AbstractBase extends ModelController(Base) {
		@Get()
		async getMany(@Query() properties: object): Promise<object> {
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
		async updateMany(@Body() properties: object): Promise<object> {
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
		async dropOne(@Param('id') id: string, @Query() properties: object): Promise<object> {
			return await super.dropOne(id, properties);
		}
	}

	return AbstractBase;
}

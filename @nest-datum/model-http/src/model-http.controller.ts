import { 
	HttpException,
	ForbiddenException,
	UnauthorizedException,
	BadRequestException,
	NotFoundException,
	Get, 
	Post,
	Patch,
	Delete,
	Query,
	Param,
	Body,
} from '@nestjs/common';
import { FormDataRequest } from 'nestjs-form-data';
import { ModelController } from '@nest-datum/model';
import { 
	ExceptionHttp,
	ExceptionHttpError,
	ExceptionHttpForbidden,
	ExceptionHttpUnauthorized,
	ExceptionHttpBadRequest,
	ExceptionHttpNotFound, 
} from '@nest-datum/exception-http';

class Sample {
}

export function ModelHttpController(Base: any = Sample) {
	class AbstractBase extends ModelController(Base) {
		constructor(...properties) {
			super(...properties);

			this.Exception = ExceptionHttp(HttpException);
			this.ExceptionError = ExceptionHttpError(HttpException);
			this.ExceptionForbidden = ExceptionHttpForbidden(ForbiddenException);
			this.ExceptionUnauthorized = ExceptionHttpUnauthorized(UnauthorizedException)
			this.ExceptionBadRequest = ExceptionHttpBadRequest(BadRequestException);
			this.ExceptionNotFound = ExceptionHttpNotFound(NotFoundException);
		}

		@Get()
		async getMany(@Query() properties: object): Promise<object> {
			return await super.getMany(properties);
		}

		@Get(':id')
		async getOne(@Param('id') id: string, @Query() properties: object): Promise<object> {
			return await super.getOne(id, properties);
		}

		@Post('many')
		@FormDataRequest()
		async createMany(@Body() properties: object): Promise<object> {
			return await super.createMany(properties);
		}

		@Post('one')
		@FormDataRequest()
		async create(@Body() properties: object): Promise<object> {
			return await super.create(properties);
		}

		@Patch()
		@FormDataRequest()
		async updateMany(
			@Query() filters: object,
			@Body() properties: object
		): Promise<object> {
			return await super.updateMany(
				filters,
				properties,
			);
		}

		@Patch(':id')
		@FormDataRequest()
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

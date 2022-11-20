import { ApiTags } from '@nestjs/swagger';
import { 
	Controller,
	Get, 
	Delete,
	Post,
	Patch,
	Body,
	Param,
	Query,
	HttpException,
} from '@nestjs/common';
import { AccessToken } from '@nest-datum/common';
import { 
	RegistryService,
	LogsService, 
} from '@nest-datum/services';

@ApiTags(`[ ${process.env.SERVICE_MAIL} ] Templates`)
@Controller(`${process.env.SERVICE_MAIL}/template`)
export class TemplateController {
	constructor(
		private readonly registryService: RegistryService,
		private readonly logsService: LogsService,
	) {
	}

	@Get()
	async many(
		@AccessToken() accessToken: string,
		@Query('select') select: string,
		@Query('relations') relations: string,
		@Query('page') page: number,
		@Query('limit') limit: number,
		@Query('query') query: string,
		@Query('filter') filter: string,
		@Query('sort') sort: string,
	): Promise<Array<any>> {
		try {
			return await this.registryService.send(process.env.SERVICE_MAIL, 'template.many', {
				accessToken,
				select,
				relations,
				page,
				limit,
				query,
				filter,
				sort,
			});
		}
		catch (err) {
			this.logsService.emit(err, accessToken);

			throw new HttpException(err.message, err.httpCode || 500);
		}
	}

	@Get(':id')
	async one(
		@AccessToken() accessToken: string,
		@Query('select') select: string,
		@Query('relations') relations: string,
		@Param('id') id: string,
	): Promise<any> {
		try {
			return await this.registryService.send(process.env.SERVICE_MAIL, 'template.one', {
				accessToken,
				select,
				relations,
				id,
			});
		}
		catch (err) {
			this.logsService.emit(err, accessToken);

			throw new HttpException(err.message, err.httpCode || 500);
		}
	}

	@Delete(':id')
	async drop(
		@AccessToken() accessToken: string,
		@Param('id') id: string,
	) {
		try {
			return await this.registryService.send(process.env.SERVICE_MAIL, 'template.drop', {
				accessToken,
				id,
			});
		}
		catch (err) {
			this.logsService.emit(err, accessToken);

			throw new HttpException(err.message, err.httpCode || 500);
		}
	}

	@Delete()
	async dropMany(
		@AccessToken() accessToken: string,
		@Body('ids') ids: string,
	) {
		try {
			return await this.registryService.send(process.env.SERVICE_MAIL, 'template.dropMany', {
				accessToken,
				ids,
			});
		}
		catch (err) {
			this.logsService.emit(err, accessToken);

			throw new HttpException(err.message, err.httpCode || 500);
		}
	}

	@Delete(':id/options/:optionId')
	async dropOption(
		@AccessToken() accessToken: string,
		@Param('id') id: string,
		@Param('optionId') optionId: string,
	) {
		try {
			return await this.registryService.send(process.env.SERVICE_MAIL, 'template.dropOption', {
				accessToken,
				id,
				optionId,
			});
		}
		catch (err) {
			this.logsService.emit(err, accessToken);

			throw new HttpException(err.message, err.httpCode || 500);
		}
	}

	@Post()
	async create(
		@AccessToken() accessToken: string,
		@Body('id') id: string,
		@Body('userId') userId: string,
		@Body('templateStatusId') templateStatusId: string,
		@Body('name') name: string,
		@Body('description') description: string,
		@Body('fromEmail') fromEmail: string,
		@Body('fromName') fromName: string,
		@Body('isNotDelete') isNotDelete: boolean,
	) {
		try {
			return await this.registryService.send(process.env.SERVICE_MAIL, 'template.create', {
				accessToken,
				id,
				userId,
				templateStatusId,
				name,
				description,
				fromEmail,
				fromName,
				isNotDelete,
			});
		}
		catch (err) {
			this.logsService.emit(err, accessToken);

			throw new HttpException(err.message, err.httpCode || 500);
		}
	}

	@Post(':id/options/:optionId')
	async createOption(
		@AccessToken() accessToken: string,
		@Param('id') id: string,
		@Param('optionId') optionId: string,
		@Body() data,
	) {
		try {
			return await this.registryService.send(process.env.SERVICE_MAIL, 'template.createOption', {
				accessToken,
				id,
				optionId,
				data,
			});
		}
		catch (err) {
			this.logsService.emit(err, accessToken);

			throw new HttpException(err.message, err.httpCode || 500);
		}
	}

	@Post(':id/options')
	async createOptions(
		@AccessToken() accessToken: string,
		@Param('id') id: string,
		@Body() data,
	) {
		try {
			return await this.registryService.send(process.env.SERVICE_MAIL, 'template.createOptions', {
				accessToken,
				id,
				data,
			});
		}
		catch (err) {
			this.logsService.emit(err, accessToken);

			throw new HttpException(err.message, err.httpCode || 500);
		}
	}

	@Patch(':id')
	async update(
		@AccessToken() accessToken: string,
		@Param('id') id: string,
		@Body('newId') newId: string,
		@Body('userId') userId: string,
		@Body('templateStatusId') templateStatusId: string,
		@Body('name') name: string,
		@Body('description') description: string,
		@Body('fromEmail') fromEmail: string,
		@Body('fromName') fromName: string,
		@Body('isNotDelete') isNotDelete: boolean,
		@Body('isDeleted') isDeleted: boolean,
	) {
		try {
			return await this.registryService.send(process.env.SERVICE_MAIL, 'template.update', {
				accessToken,
				id,
				newId,
				userId,
				templateStatusId,
				name,
				description,
				fromEmail,
				fromName,
				isNotDelete,
			});
		}
		catch (err) {
			this.logsService.emit(err, accessToken);

			throw new HttpException(err.message, err.httpCode || 500);
		}
	}
}

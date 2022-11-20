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

@ApiTags(`[ ${process.env.SERVICE_REGISTRY} ] List of running services`)
@Controller(`${process.env.SERVICE_REGISTRY}/serv`)
export class RegistryController {
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
			return await this.registryService.send(process.env.SERVICE_REGISTRY, 'registry.many', {
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
			return await this.registryService.send(process.env.SERVICE_REGISTRY, 'registry.one', {
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
			return await this.registryService.send(process.env.SERVICE_REGISTRY, 'registry.drop', {
				accessToken,
				id,
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
		@Body('name') name: string,
		@Body('host') host: string,
		@Body('port') port: number,
		@Body('mysqlMasterHost') mysqlMasterHost: string,
		@Body('mysqlMasterPort') mysqlMasterPort: number,
		@Body('transport') transport: string,
	) {
		try {
			return await this.registryService.send(process.env.SERVICE_REGISTRY, 'registry.create', {
				accessToken,
				id,
				name,
				host,
				port,
				mysqlMasterHost,
				mysqlMasterPort,
				transport,
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
		@Body('name') name: string,
		@Body('host') host: string,
		@Body('port') port: number,
		@Body('mysqlMasterHost') mysqlMasterHost: string,
		@Body('mysqlMasterPort') mysqlMasterPort: number,
		@Body('transport') transport: string,
	) {
		try {
			return await this.registryService.send(process.env.SERVICE_REGISTRY, 'registry.update', {
				accessToken,
				id,
				newId,
				name,
				host,
				port,
				mysqlMasterHost,
				mysqlMasterPort,
				transport,
			});
		}
		catch (err) {
			this.logsService.emit(err, accessToken);

			throw new HttpException(err.message, err.httpCode || 500);
		}
	}
}

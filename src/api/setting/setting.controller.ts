import { ApiTags } from '@nestjs/swagger';
import getCurrentLine from 'get-current-line';
import * as Validators from '@nest-datum/validators';
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
import { SettingService } from './setting.service';

@ApiTags(`[ ${process.env.APP_ID} ] Settings`)
@Controller(`${process.env.APP_ID}/setting`)
export class SettingController {
	constructor(
		private readonly registryService: RegistryService,
		private readonly logsService: LogsService,
		private readonly settingService: SettingService,
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
	): Promise<any> {
		try {
			const many = await this.settingService.many({
				user: Validators.token('accessToken', accessToken, {
					secret: process.env.JWT_SECRET_ACCESS_KEY,
					timeout: process.env.JWT_ACCESS_TIMEOUT,
					isRequired: true,
					role: {
						name: [ 'Admin' ],
					},
				}),
				relations: Validators.obj('relations', relations),
				select: Validators.obj('select', select),
				sort: Validators.obj('sort', sort),
				filter: Validators.obj('filter', filter),
				query: Validators.str('query', query, {
					min: 1,
					max: 255,
				}),
				page: Validators.int('page', page, {
					min: 1,
					default: 1,
				}),
				limit: Validators.int('limit', limit, {
					min: 1,
					default: 20,
				}),
			});

			return {
				total: many[1],
				rows: many[0],
			};
		}
		catch (err) {
			this.logsService.emit(err, accessToken);

			return err;
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
			return await this.settingService.one({
				user: Validators.token('accessToken', accessToken, {
					secret: process.env.JWT_SECRET_ACCESS_KEY,
					timeout: process.env.JWT_ACCESS_TIMEOUT,
					isRequired: true,
					role: {
						name: [ 'Admin' ],
					},
				}),
				relations: Validators.obj('relations', relations),
				select: Validators.obj('select', select),
				id: Validators.id('id', id, {
					isRequired: true,
				}),
			});
		}
		catch (err) {
			this.logsService.emit(err, accessToken);

			return err;
		}
	}

	@Delete(':id')
	async drop(
		@AccessToken() accessToken: string,
		@Param('id') id: string,
	) {
		try {
			await this.settingService.drop({
				user: Validators.token('accessToken', accessToken, {
					secret: process.env.JWT_SECRET_ACCESS_KEY,
					timeout: process.env.JWT_ACCESS_TIMEOUT,
					isRequired: true,
					role: {
						name: [ 'Admin' ],
					},
				}),
				id: Validators.id('id', id, {
					isRequired: true,
				}),
			});

			return true;
		}
		catch (err) {
			this.logsService.emit(err, accessToken);

			return err;
		}
	}

	@Delete()
	async dropMany(
		@AccessToken() accessToken: string,
		@Query('ids') ids: string,
	) {
		try {
			await this.settingService.dropMany({
				user: Validators.token('accessToken', accessToken, {
					secret: process.env.JWT_SECRET_ACCESS_KEY,
					timeout: process.env.JWT_ACCESS_TIMEOUT,
					isRequired: true,
					role: {
						name: [ 'Admin' ],
					},
				}),
				ids: Validators.arr('ids', ids, {
					isRequired: true,
					min: 1,
				}),
			});

			return true;
		}
		catch (err) {
			this.logsService.emit(err, accessToken);

			return err;
		}
	}

	@Post()
	async create(
		@AccessToken() accessToken: string,
		@Body('id') id: string,
		@Body('userId') userId: string,
		@Body('name') name: string,
		@Body('description') description: string,
		@Body('dataTypeId') dataTypeId: string,
		@Body('defaultValue') defaultValue: string,
		@Body('value') value: string,
		@Body('regex') regex: string,
		@Body('isRequired') isRequired: boolean,
	) {
		try {
			return await this.settingService.create({
				user: Validators.token('accessToken', accessToken, {
					secret: process.env.JWT_SECRET_ACCESS_KEY,
					timeout: process.env.JWT_ACCESS_TIMEOUT,
					isRequired: true,
					role: {
						name: [ 'Admin' ],
					},
				}),
				id: Validators.id('id', id),
				userId: Validators.id('userId', userId),
				name: Validators.str('name', name, {
					isRequired: true,
					min: 1,
					max: 255,
				}),
				description: Validators.str('description', description, {
					min: 1,
					max: 255,
				}),
				dataTypeId: Validators.id('dataTypeId', dataTypeId, {
					isRequired: true,
				}),
				defaultValue: Validators.valueWithDataType('defaultValue', defaultValue, {
					dataTypeId: dataTypeId,
				}),
				value: Validators.valueWithDataType('value', value, {
					dataTypeId: dataTypeId,
				}),
				regex: Validators.regex('regex', regex),
				isRequired: Validators.bool('isRequired', isRequired),
			});
		}
		catch (err) {
			this.logsService.emit(err, accessToken);

			return err;
		}
	}

	@Patch(':id')
	async update(
		@AccessToken() accessToken: string,
		@Param('id') id: string,
		@Body('newId') newId: string,
		@Body('userId') userId: string,
		@Body('name') name: string,
		@Body('description') description: string,
		@Body('dataTypeId') dataTypeId: string,
		@Body('defaultValue') defaultValue: string,
		@Body('value') value: string,
		@Body('regex') regex: string,
		@Body('isRequired') isRequired: boolean,
		@Body('isDeleted') isDeleted: boolean,
		@Body('createdAt') createdAt: string,
	) {
		try {
			await this.settingService.update({
				user: Validators.token('accessToken', accessToken, {
					secret: process.env.JWT_SECRET_ACCESS_KEY,
					timeout: process.env.JWT_ACCESS_TIMEOUT,
					isRequired: true,
					role: {
						name: [ 'Admin' ],
					},
				}),
				id: Validators.id('id', id),
				newId: Validators.id('newId', newId),
				userId: Validators.id('userId', userId),
				name: Validators.str('name', name, {
					min: 1,
					max: 255,
				}),
				description: Validators.str('description', description, {
					min: 1,
					max: 255,
				}),
				dataTypeId: Validators.id('dataTypeId', dataTypeId),
				defaultValue: Validators.valueWithDataType('defaultValue', defaultValue, {
					dataTypeId: dataTypeId,
				}),
				value: Validators.valueWithDataType('value', value, {
					dataTypeId: dataTypeId,
				}),
				regex: Validators.regex('regex', regex),
				isRequired: Validators.bool('isRequired', isRequired),
				isDeleted: Validators.bool('isDeleted', isDeleted),
				createdAt: Validators.date('createdAt', createdAt),
			});

			return true;
		}
		catch (err) {
			this.logsService.emit(err, accessToken);

			return err;
		}
	}
}

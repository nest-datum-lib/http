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
import { WarningException } from '@nest-datum-common/exceptions';
import {
	obj as utilsCheckObj,
	strId as utilsCheckStrId,
	strDescription as utilsCheckStrDescription,
	strRegex as utilsCheckStrRegex,
	numericInt as utilsCheckNumericInt,
} from '@nest-datum-utils/check';
import { 
	checkToken,
	getUser, 
} from '@nest-datum/jwt';
import { TransportService } from '@nest-datum/transport';
import { AccessToken } from '@nest-datum-common/decorators';
import { HttpController as NestDatumHttpController } from '@nest-datum-common/controller';
import { SettingService } from './setting.service';

@Controller(`${process.env.SERVICE_HTTP}/setting`)
export class SettingController extends NestDatumHttpController {
	public serviceName = process.env.SERVICE_HTTP;
	public entityName = 'setting';

	constructor(
		public transportService: TransportService,
		public service: SettingService,
	) {
		super();
	}

	validateMany(options: object = {}) {
		if (!checkToken(options['accessToken'], process.env.JWT_SECRET_ACCESS_KEY)) {
			throw new WarningException(`User is undefined or token is not valid.`);
		}
		const user = getUser(options['accessToken']);

		try {
			options['select'] = JSON.parse(options['select']);
		}
		catch (err) {
		}
		try {
			options['relations'] = JSON.parse(options['relations']);
		}
		catch (err) {
		}
		try {
			options['sort'] = JSON.parse(options['sort']);
		}
		catch (err) {
		}
		try {
			options['filter'] = JSON.parse(options['filter']);
		}
		catch (err) {
		}
		return {
			user,
			...utilsCheckNumericInt(options['page'])
				? { page: Number(options['page'] || 1) }
				: { page: 1 },
			...utilsCheckNumericInt(options['limit'])
				? { limit: Number(options['limit'] || 20) }
				: { limit: 20 },
			...utilsCheckObj(options['select']) 
				? { select: options['select'] } 
				: {},
			...utilsCheckObj(options['relations']) 
				? { relations: options['relations'] } 
				: {},
			...utilsCheckObj(options['sort']) 
				? { sort: options['sort'] } 
				: {},
			...utilsCheckObj(options['filter']) 
				? { filter: options['filter'] } 
				: {},
			...utilsCheckStrDescription(options['query']) 
				? { query: options['query'] } 
				: {},
		};
	}

	validateOne(options: object = {}) {
		if (!utilsCheckStrId(options['id'])) {
			throw new WarningException(`Property "id" is not valid.`);
		}
		if (!checkToken(options['accessToken'], process.env.JWT_SECRET_ACCESS_KEY)) {
			throw new WarningException(`User is undefined or token is not valid.`);
		}
		const user = getUser(options['accessToken']);

		try {
			options['select'] = JSON.parse(options['select']);
		}
		catch (err) {
		}
		try {
			options['relations'] = JSON.parse(options['relations']);
		}
		catch (err) {
		}
		return {
			user,
			id: options['id'],
			...utilsCheckObj(options['select']) 
				? { select: options['select'] } 
				: {},
			...utilsCheckObj(options['relations']) 
				? { relations: options['relations'] } 
				: {},
		};
	}

	validateDrop(options: object = {}) {
		if (!utilsCheckStrId(options['id'])) {
			throw new WarningException(`Property "id" is not valid.`);
		}
		if (!checkToken(options['accessToken'], process.env.JWT_SECRET_ACCESS_KEY)) {
			throw new WarningException(`User is undefined or token is not valid.`);
		}
		const user = getUser(options['accessToken']);

		return {
			user,
			id: options['id'],
		};
	}

	validateDropMany(options: object = {}) {
		if (!checkToken(options['accessToken'], process.env.JWT_SECRET_ACCESS_KEY)) {
			throw new WarningException(`User is undefined or token is not valid.`);
		}
		const user = getUser(options['accessToken']);

		return {
			user,
			ids: JSON.parse(options['ids']),
		};
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
			const many = await this.service.many(this.validateMany({
				accessToken,
				select,
				relations,
				page,
				limit,
				query,
				filter,
				sort,
			}));

			return {
				total: many[1],
				rows: many[0],
			};
		}
		catch (err) {
			this.log(err);

			throw new HttpException(err.message, err.errorCode || 500);
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
			return await this.service.one(this.validateOne({
				accessToken,
				select,
				relations,
				id,
			}));
		}
		catch (err) {
			this.log(err);

			throw new HttpException(err.message, err.errorCode || 500);
		}
	}

	@Delete(':id')
	async drop(
		@AccessToken() accessToken: string,
		@Param('id') id: string,
	) {
		try {
			return await this.service.drop(this.validateDrop({
				accessToken,
				id,
			}));
		}
		catch (err) {
			this.log(err);

			throw new HttpException(err.message, err.errorCode || 500);
		}
	}

	@Delete(':id')
	async dropMany(
		@AccessToken() accessToken: string,
		@Param('ids') ids: string,
	) {
		try {
			return await this.service.dropMany(this.validateDropMany({
				accessToken,
				ids,
			}));
		}
		catch (err) {
			this.log(err);

			throw new HttpException(err.message, err.errorCode || 500);
		}
	}

	@Post()
	async create(
		@AccessToken() accessToken: string,
		@Param('id') id: string,
		@Body('userId') userId: string,
		@Body('name') name: string,
		@Body('description') description: string,
		@Body('dataTypeId') dataTypeId: string,
		@Body('value') value: string,
		@Body('regex') regex: string,
		@Body('isNotDelete') isNotDelete: boolean,
	) {
		try {
			return await this.service.create({
				accessToken,
				id,
				userId,
				name,
				description,
				dataTypeId,
				value,
				regex,
				isNotDelete,
			});
		}
		catch (err) {
			this.log(err);

			throw new HttpException(err.message, err.errorCode || 500);
		}
	}

	@Patch(':id')
	async update(
		@AccessToken() accessToken: string,
		@Param('id') id: string,
		@Body('id') newId: string,
		@Body('userId') userId: string,
		@Body('name') name: string,
		@Body('description') description: string,
		@Body('dataTypeId') dataTypeId: string,
		@Body('value') value: string,
		@Body('regex') regex: string,
		@Body('isNotDelete') isNotDelete: boolean,
		@Body('isDeleted') isDeleted: boolean,
	) {
		try {
			return await this.service.update({
				accessToken,
				id,
				newId,
				userId,
				name,
				description,
				dataTypeId,
				value,
				regex,
				isNotDelete,
				isDeleted,
			});
		}
		catch (err) {
			this.log(err);

			throw new HttpException(err.message, err.errorCode || 500);
		}
	}
}

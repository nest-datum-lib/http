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
import { AccessToken } from 'nest-datum/common/src';
import { BalancerService } from 'nest-datum/balancer/src';

@ApiTags(`[ ${process.env.SERVICE_SSO} ] Roles`)
@Controller(`${process.env.SERVICE_SSO}/role`)
export class RoleController {
	constructor(
		private readonly balancerService: BalancerService,
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
			return await this.balancerService.send({
				name: process.env.SERVICE_SSO, 
				cmd: 'role.many',
			}, {
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
			this.balancerService.log(err);

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
			return await this.balancerService.send({
				name: process.env.SERVICE_SSO, 
				cmd: 'role.one',
			}, {
				accessToken,
				select,
				relations,
				id,
			});
		}
		catch (err) {
			this.balancerService.log(err);

			throw new HttpException(err.message, err.httpCode || 500);
		}
	}

	@Delete(':id')
	async drop(
		@AccessToken() accessToken: string,
		@Param('id') id: string,
	) {
		try {
			return await this.balancerService.send({
				name: process.env.SERVICE_SSO, 
				cmd: 'role.drop',
			}, {
				accessToken,
				id,
			});
		}
		catch (err) {
			this.balancerService.log(err);

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
			return await this.balancerService.send({
				name: process.env.SERVICE_SSO, 
				cmd: 'role.dropOption',
			}, {
				accessToken,
				id,
				optionId,
			});
		}
		catch (err) {
			this.balancerService.log(err);

			throw new HttpException(err.message, err.httpCode || 500);
		}
	}

	@Post()
	async create(
		@AccessToken() accessToken: string,
		@Body('id') id: string,
		@Body('userId') userId: string,
		@Body('roleStatusId') roleStatusId: string,
		@Body('name') name: string,
		@Body('description') description: string,
		@Body('isNotDelete') isNotDelete: boolean,
	) {
		try {
			return await this.balancerService.send({
				name: process.env.SERVICE_SSO, 
				cmd: 'role.create',
			}, {
				accessToken,
				id,
				userId,
				roleStatusId,
				name,
				description,
				isNotDelete,
			});
		}
		catch (err) {
			this.balancerService.log(err);

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
			return await this.balancerService.send({
				name: process.env.SERVICE_SSO, 
				cmd: 'role.createOption',
			}, {
				accessToken,
				id,
				optionId,
				data,
			});
		}
		catch (err) {
			this.balancerService.log(err);

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
			return await this.balancerService.send({
				name: process.env.SERVICE_SSO, 
				cmd: 'role.createOptions',
			}, {
				accessToken,
				id,
				data,
			});
		}
		catch (err) {
			this.balancerService.log(err);

			throw new HttpException(err.message, err.httpCode || 500);
		}
	}

	@Patch(':id')
	async update(
		@AccessToken() accessToken: string,
		@Param('id') id: string,
		@Body('newId') newId: string,
		@Body('userId') userId: string,
		@Body('roleStatusId') roleStatusId: string,
		@Body('name') name: string,
		@Body('description') description: string,
		@Body('isNotDelete') isNotDelete: boolean,
		@Body('isDeleted') isDeleted: boolean,
	) {
		try {
			return await this.balancerService.send({
				name: process.env.SERVICE_SSO, 
				cmd: 'role.update',
			}, {
				accessToken,
				id,
				newId,
				userId,
				roleStatusId,
				name,
				description,
				isDeleted,
				isNotDelete,
			});
		}
		catch (err) {
			this.balancerService.log(err);

			throw new HttpException(err.message, err.httpCode || 500);
		}
	}
}

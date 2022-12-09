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

@ApiTags(`[ ${process.env.SERVICE_LOGS} ] Traffic logs`)
@Controller(`${process.env.SERVICE_LOGS}/traffic`)
export class TrafficController {
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
				name: process.env.SERVICE_LOGS, 
				cmd: 'traffic.many',
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
				name: process.env.SERVICE_LOGS, 
				cmd: 'traffic.one',
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
				name: process.env.SERVICE_LOGS, 
				cmd: 'traffic.drop',
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

	@Post()
	async create(
		@AccessToken() accessToken: string,
		@Body('id') id: string,
		@Body('userId') userId: string,
		@Body('servId') servId: string,
		@Body('replica') replica: string,
		@Body('ipAddr') ipAddr: string,
		@Body('route') route: string,
		@Body('referrer') referrer: string,
		@Body('method') method: string,
		@Body('headers') headers: string,
		@Body('cookies') cookies: string,
		@Body('queries') queries: string,
		@Body('body') body: string,
		@Body('createdAt') createdAt: string,
	) {
		try {
			return await this.balancerService.send({
				name: process.env.SERVICE_LOGS, 
				cmd: 'traffic.create',
			}, {
				accessToken,
				id,
				userId,
				servId,
				replica,
				ipAddr,
				route,
				referrer,
				method,
				headers,
				cookies,
				queries,
				body,
				createdAt,
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
		@Body('servId') servId: string,
		@Body('replica') replica: string,
		@Body('ipAddr') ipAddr: string,
		@Body('route') route: string,
		@Body('referrer') referrer: string,
		@Body('method') method: string,
		@Body('headers') headers: string,
		@Body('cookies') cookies: string,
		@Body('queries') queries: string,
		@Body('body') body: string,
		@Body('createdAt') createdAt: string,
	) {
		try {
			return await this.balancerService.send({
				name: process.env.SERVICE_LOGS, 
				cmd: 'traffic.update',
			}, {
				accessToken,
				id,
				newId,
				userId,
				servId,
				replica,
				ipAddr,
				route,
				referrer,
				method,
				headers,
				cookies,
				queries,
				body,
				createdAt,
			});
		}
		catch (err) {
			this.balancerService.log(err);

			throw new HttpException(err.message, err.httpCode || 500);
		}
	}
}

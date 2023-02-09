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
import { HttpController } from '@nest-datum-common/controller';
import { AccessToken } from '@nest-datum-common/decorators';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_FORMS}/form`)
export class FormController extends HttpController {
	public serviceName = process.env.SERVICE_FORMS;
	public entityName = 'form';
	public entityNameRelation = 'formOptionRelation';

	constructor(
		public transportService: TransportService,
	) {
		super();
	}

	@Get('option')
	async optionMany(
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
			return await this.transportService.send({
				name: process.env.SERVICE_FORMS, 
				cmd: 'formOptionRelation.many',
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
			this.log(err);

			throw new HttpException(err.message, err.errorCode || 500);
		}
	}

	@Get('option/:id')
	async optionOne(
		@AccessToken() accessToken: string,
		@Query('select') select: string,
		@Query('relations') relations: string,
		@Param('id') id: string,
	): Promise<any> {
		try {
			return await this.transportService.send({
				name: process.env.SERVICE_FORMS, 
				cmd: 'formOptionRelation.one',
			}, {
				accessToken,
				select,
				relations,
				id,
			});
		}
		catch (err) {
			this.log(err);

			throw new HttpException(err.message, err.errorCode || 500);
		}
	}

	@Delete('option/:id')
	async optionDrop(
		@AccessToken() accessToken: string,
		@Param('id') id: string,
	) {
		try {
			return await this.transportService.send({
				name: process.env.SERVICE_FORMS, 
				cmd: 'formOptionRelation.drop',
			}, {
				accessToken,
				id,
			});
		}
		catch (err) {
			this.log(err);

			throw new HttpException(err.message, err.errorCode || 500);
		}
	}

	@Post(':id/field')
	async createFields(
		@AccessToken() accessToken: string,
		@Param('id') id: string,
		@Body('fieldId') fieldId: string,
	) {
		try {
			return await this.transportService.send({
				name: process.env.SERVICE_FORMS, 
				cmd: 'formField.create',
			}, {
				accessToken,
				formId: id,
				fieldId,
			});
		}
		catch (err) {
			this.log(err);

			throw new HttpException(err.message, err.errorCode || 500);
		}
	}

	@Post(':id/option')
	async createOption(
		@AccessToken() accessToken: string,
		@Param('id') formOptionId: string,
		@Body('formId') formId: string,
	) {
		try {
			return await this.transportService.send({
				name: this.serviceName, 
				cmd: `${this.entityNameRelation}.create`,
			}, {
				accessToken,
				formOptionId,
				formId,
			});
		}
		catch (err) {
			this.log(err);

			throw new HttpException(err.message, err.errorCode || 500);
		}
	}

	@Post(':id/options')
	async createOptions(
		@AccessToken() accessToken: string,
		@Param('id') id: string,
		@Body() data,
	) {
		try {
			return await this.transportService.send({
				name: this.serviceName, 
				cmd: `${this.entityName}.createOptions`,
			}, {
				accessToken,
				id,
				data,
			});
		}
		catch (err) {
			this.log(err);

			throw new HttpException(err.message, err.errorCode || 500);
		}
	}

	@Post()
	async create(
		@AccessToken() accessToken: string,
		@Body('id') id: string,
		@Body('userId') userId: string,
		@Body('formStatusId') formStatusId: string,
		@Body('name') name: string,
		@Body('description') description: string,
		@Body('isNotDelete') isNotDelete: boolean,
	) {
		try {
			return await this.transportService.send({
				name: this.serviceName, 
				cmd: `${this.entityName}.create`,
			}, {
				accessToken,
				id,
				userId,
				formStatusId,
				name,
				description,
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
		@Body('formStatusId') formStatusId: string,
		@Body('name') name: string,
		@Body('description') description: string,
		@Body('isNotDelete') isNotDelete: boolean,
		@Body('isDeleted') isDeleted: boolean,
	) {
		try {
			return await this.transportService.send({
				name: this.serviceName, 
				cmd: `${this.entityName}.update`,
			}, {
				accessToken,
				id,
				newId,
				userId,
				formStatusId,
				name,
				description,
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

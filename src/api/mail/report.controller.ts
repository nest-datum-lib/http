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

@Controller(`${process.env.SERVICE_FORMS}/report`)
export class ReportController extends HttpController {
	public serviceName = process.env.SERVICE_FORMS;
	public entityName = 'report';

	constructor(
		public transportService: TransportService,
	) {
		super();
	}

	@Post()
	async create(
		@AccessToken() accessToken: string,
		@Body('id') id: string,
		@Body('userId') userId: string,
		@Body('reportStatusId') reportStatusId: string,
		@Body('letterId') letterId: string,
		@Body('email') email: string,
		@Body('action') action: string,
		@Body('content') content: string,
	) {
		try {
			return await this.transportService.send({
				name: this.serviceName, 
				cmd: `${this.entityName}.create`,
			}, {
				accessToken,
				id,
				userId,
				reportStatusId,
				letterId,
				email,
				action,
				content,
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
		@Body('reportStatusId') reportStatusId: string,
		@Body('letterId') letterId: string,
		@Body('email') email: string,
		@Body('action') action: string,
		@Body('content') content: string,
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
				reportStatusId,
				letterId,
				email,
				action,
				content,
			});
		}
		catch (err) {
			this.log(err);

			throw new HttpException(err.message, err.errorCode || 500);
		}
	}
}

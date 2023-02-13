import { 
	Controller,
	Get, 
	Delete,
	Post,
	Patch,
	Body,
	Param,
	Query,
	ForbiddenException,
} from '@nestjs/common';
import { HttpTcpController } from '@nest-datum/controller';
import { AccessToken } from '@nest-datum-common/decorators';
import { TransportService } from '@nest-datum/transport';
import { 
	str as utilsCheckStr,
	strId as utilsCheckStrId,
	strName as utilsCheckStrName,
	strEmail as utilsCheckStrEmail,
	strDescription as utilsCheckStrDescription,
} from '@nest-datum-utils/check';
import { 
	checkToken,
	getUser, 
} from '@nest-datum/jwt';

@Controller(`${process.env.SERVICE_MAIL}/report`)
export class ReportController extends HttpTcpController {
	public serviceName = process.env.SERVICE_MAIL;
	public entityName = 'report';

	constructor(
		public transportService: TransportService,
	) {
		super();
	}

	async validateCreate(options) {
		if (!utilsCheckStrDescription(options['action'])) {
			throw new ForbiddenException(`Property "action" is not valid.`);
		}
		if (!utilsCheckStr(options['content'])) {
			throw new ForbiddenException(`Property "content" is not valid.`);
		}
		if (!utilsCheckStrId(options['letterId'])) {
			throw new ForbiddenException(`Property "letterId" is not valid.`);
		}
		if (!utilsCheckStrId(options['reportStatusId'])) {
			throw new ForbiddenException(`Property "reportStatusId" is not valid.`);
		}
		if (!utilsCheckStrEmail(options['email'])) {
			throw new ForbiddenException(`Property "email" is not valid.`);
		}
		return await this.validateUpdate(options);
	}

	async validateUpdate(options) {
		if (!checkToken(options['accessToken'], process.env.JWT_SECRET_ACCESS_KEY)) {
			throw new ForbiddenException(`User is undefined or token is not valid.`);
		}
		const user = getUser(options['accessToken']);

		return {
			...await super.validateUpdate(options),
			login: user['login'],
			...(options['email'] && utilsCheckStrEmail(options['email'])) 
				? { email: options['email'] } 
				: {},
			...(options['action'] && utilsCheckStrDescription(options['action'])) 
				? { action: options['action'] } 
				: {},
			...(options['content'] && utilsCheckStr(options['content'])) 
				? { content: JSON.parse(options['content']) } 
				: {},
			...(options['reportStatusId'] && utilsCheckStrId(options['reportStatusId'])) 
				? { reportStatusId: options['reportStatusId'] } 
				: {},
			...(options['letterId'] && utilsCheckStrId(options['letterId'])) 
				? { letterId: options['letterId'] } 
				: {},
		};
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
		return await this.serviceHandlerWrapper(async () => await this.transportService.send({
			name: this.serviceName, 
			cmd: `${this.entityName}.create`,
		}, await this.validateCreate({
			accessToken,
			id,
			userId,
			reportStatusId,
			letterId,
			email,
			action,
			content,
		})));
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
		return await this.serviceHandlerWrapper(async () => await this.transportService.send({
			name: this.serviceName, 
			cmd: `${this.entityName}.update`,
		}, await this.validateCreate({
			accessToken,
			id,
			newId,
			userId,
			reportStatusId,
			letterId,
			email,
			action,
			content,
		})));
	}
}

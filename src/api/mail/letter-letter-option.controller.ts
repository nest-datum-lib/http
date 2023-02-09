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

@Controller(`${process.env.SERVICE_FORMS}/letter/option`)
export class LetterLetterOptionController extends HttpController {
	public serviceName = process.env.SERVICE_FORMS;
	public entityName = 'letterOptionRelation';

	constructor(
		public transportService: TransportService,
	) {
		super();
	}
}

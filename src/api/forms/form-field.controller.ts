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

@Controller(`${process.env.SERVICE_FORMS}/form/field`)
export class FormFieldController extends HttpController {
	public serviceName = process.env.SERVICE_FORMS;
	public entityName = 'formField';

	constructor(
		public transportService: TransportService,
	) {
		super();
	}
}

import { Controller } from '@nestjs/common';
import { HttpTcpController } from '@nest-datum/controller';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_MAIL}/letter/option`)
export class LetterLetterOptionController extends HttpTcpController {
	protected serviceName = process.env.SERVICE_MAIL;
	protected entityName = 'letterOptionRelation';

	constructor(
		protected transportService: TransportService,
	) {
		super();
	}
}

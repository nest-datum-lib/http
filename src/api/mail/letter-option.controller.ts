import { Controller } from '@nestjs/common';
import { OptionHttpTcpController } from '@nest-datum/option';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_MAIL}/letter-option`)
export class LetterOptionController extends OptionHttpTcpController {
	protected serviceName = process.env.SERVICE_MAIL;
	protected entityName = 'letterOption';

	constructor(
		protected transportService: TransportService,
	) {
		super();
	}
}

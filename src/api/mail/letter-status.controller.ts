import { Controller } from '@nestjs/common';
import { StatusHttpTcpController } from '@nest-datum/status';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_MAIL}/letter-status`)
export class LetterStatusController extends StatusHttpTcpController {
	protected serviceName = process.env.SERVICE_MAIL;
	protected entityName = 'letterStatus';

	constructor(
		protected transportService: TransportService,
	) {
		super();
	}
}

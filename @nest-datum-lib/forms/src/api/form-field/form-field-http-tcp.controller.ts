import { Controller } from '@nestjs/common';
import { BindHttpTcpController } from '@nest-datum/bind';
import { TransportService } from '@nest-datum/transport';

console.log('>>>>>>>>', `${process.env.SERVICE_FORMS}/form/field`)

@Controller(`/form/field`)
export class FormFieldHttpTcpController extends BindHttpTcpController {
	protected readonly serviceName: string = process.env.SERVICE_FORMS;
	protected readonly entityName: string = 'formField';

	constructor(
		protected transport: TransportService,
	) {
		super();
	}
}

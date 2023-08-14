import { Controller } from '@nestjs/common';
import { AccessHttpController } from '@nest-datum/access-http';
import { AccessService } from './access.service';

@Controller(`/access`)
export class AccessController extends AccessHttpController {
	constructor(
		public readonly service: AccessService,
	) {
		super();
	}
}

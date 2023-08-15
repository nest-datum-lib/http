import { Controller } from '@nestjs/common';
import { AccessHttpRoleController } from '@nest-datum/access-http';
import { AccessRoleService } from './access-role.service';

@Controller(`/access-role`)
export class AccessRoleController extends AccessHttpRoleController {
	constructor(
		public readonly service: AccessRoleService,
	) {
		super();
	}
}

import { ForbiddenException } from '@nestjs/common';
import { ExceptionForbidden } from '@nest-datum/exception';
import { ExceptionHttp } from './exception-http';

export function ExceptionHttpForbidden(Base: any = ForbiddenException) {
	class AbstractBase extends ExceptionHttp(ExceptionForbidden(ForbiddenException)) {
	};

	return AbstractBase;
};

import { BadRequestException } from '@nestjs/common';
import { ExceptionBadRequest } from '@nest-datum/exception';
import { ExceptionHttp } from './exception-http';

export function ExceptionHttpBadRequest(Base: any = BadRequestException) {
	class AbstractBase extends ExceptionBadRequest(BadRequestException) {
	};

	return AbstractBase;
};

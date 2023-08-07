import { ExceptionError } from '@nest-datum/exception';
import { ExceptionHttp } from './exception-http';

class Sample {}

export function ExceptionHttpError(Base: any = Sample) {
	class AbstractBase extends ExceptionHttp(ExceptionError(Base)) {
	};

	return AbstractBase;
};

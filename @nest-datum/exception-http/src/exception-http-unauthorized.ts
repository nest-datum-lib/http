import { ExceptionUnauthorized } from '@nest-datum/exception';
import { ExceptionHttp } from './exception-http';

class Sample {}

export function ExceptionHttpUnauthorized(Base: any = Sample) {
	class AbstractBase extends ExceptionHttp(ExceptionUnauthorized(Base)) {
	};

	return AbstractBase;
};

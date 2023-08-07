import { ExceptionNotFound } from '@nest-datum/exception';
import { ExceptionHttp } from './exception-http';

class Sample {}

export function ExceptionHttpNotFound(Base: any = Sample) {
	class AbstractBase extends ExceptionHttp(ExceptionNotFound(Base)) {
	};

	return AbstractBase;
};

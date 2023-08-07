import { Exception } from '@nest-datum/exception';

class Sample {}

export function ExceptionHttp(Base: any = Sample) {
	class AbstractBase extends Exception(Base) {
	};

	return AbstractBase;
};

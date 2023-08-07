import { Exception } from './exception';

export function ExceptionUnauthorized(Base: any = Error) {
	class AbstractBase extends Exception(Base) {
	};

	return AbstractBase;
};

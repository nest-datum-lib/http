import { Exception } from './exception';

export function ExceptionForbidden(Base: any = Error) {
	class AbstractBase extends Exception(Base) {
	};

	return AbstractBase;
};

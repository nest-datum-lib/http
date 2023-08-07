import { Exception } from './exception';

export function ExceptionNotFound(Base: any = Error) {
	class AbstractBase extends Exception(Base) {
	};

	return AbstractBase;
};

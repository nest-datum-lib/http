import { Exception } from './exception';

export function ExceptionError(Base: any = Error) {
	class AbstractBase extends Exception(Base) {
	};

	return AbstractBase;
};

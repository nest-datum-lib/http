import { Exception } from './exception';

export function ExceptionBadRequest(Base: any = Error) {
	class AbstractBase extends Exception(Base) {
	};

	return AbstractBase;
};

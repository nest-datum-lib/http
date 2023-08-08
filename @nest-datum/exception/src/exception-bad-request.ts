import { Exception } from './exception';

export function ExceptionBadRequest(Base: any = Error) {
	return class AbstractBase extends Exception(Base) {
	};
};


export function Exception(Base: any = Error) {
	class AbstractBase extends Base {
		constructor(...properties) {
			super(...properties);
		}
	};

	return AbstractBase;
};

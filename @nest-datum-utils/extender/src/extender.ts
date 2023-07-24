
export const extender = (BaseClass: any, extendClasses: any[]) => extendClasses
	.map((ExtendClass) => function () {
		class ReduceClass extends ExtendClass {
			constructor(...properties) {
				super(...properties);
			}
		}
		return ReduceClass;
	})
	.reduce((all, item) => item(), BaseClass);


class Sample {
}

export function ModelStatusService(Base: any = Sample) {
	class AbstractBase extends Base {
		async getManyAllowPreparePropertiesSelect(): Promise<Array<string>> {
			return [ 
				...await super.getManyAllowPreparePropertiesSelect(), 
				'statusId',
			];
		}
	}

	return AbstractBase;
}

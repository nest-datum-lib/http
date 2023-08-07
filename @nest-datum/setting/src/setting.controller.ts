
class Sample {
}

export function SettingController(Base: any = Sample) {
	class AbstractBase extends Base {
		public readonly getManyWithToken: boolean = true;
	}

	return AbstractBase;
}

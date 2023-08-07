
class Sample {
}

export function SettingService(Base: any = Sample) {
	class AbstractBase extends Base {
	}

	return AbstractBase;
}

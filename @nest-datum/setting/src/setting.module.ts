
class Sample {
}

export function SettingModule(Base: any = Sample) {
	class AbstractBase extends Base {
	}

	return AbstractBase;
}

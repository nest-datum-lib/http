
class Sample {
}

export function ModelDataValueController(Base: any = Sample) {
	class AbstractBase extends Base {
		async validateCreate(properties: object): Promise<object> {
			return { ...properties, dataValue: String(properties['dataValue'] ?? '') };
		}	
	}

	return AbstractBase;
}

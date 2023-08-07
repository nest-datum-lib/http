import { Column } from 'typeorm';

class Sample {}

export function ModelSqlDataType(Base: any = Sample) {
	class AbstractBase extends Base {
		@Column({ default: '' })
		public dataTypeId: string;
	}

	return AbstractBase;
};

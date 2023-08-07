import { Column } from 'typeorm';

class Sample {
}

export function ModelSqlName(Base: any = Sample) {
	class AbstractBase extends Base {
		@Column({ default: '' })
		public name: string;
	}

	return AbstractBase;
};

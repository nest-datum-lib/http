import { Column } from 'typeorm';

class Sample {
}

export function ModelSqlDescription(Base: any = Sample) {
	class AbstractBase extends Base {
		@Column({ default: '' })
		public description: string;
	}

	return AbstractBase;
};

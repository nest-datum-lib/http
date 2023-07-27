import { Column } from 'typeorm';

class Sample {
}

export function ModelStatusSql(Base: any = Sample) {
	class AbstractBase extends Base {
		@Column({ default: '' })
		public statusId: string;
	}

	return AbstractBase;
};

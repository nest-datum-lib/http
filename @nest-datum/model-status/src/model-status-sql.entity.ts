import { Column } from 'typeorm';

class Sample {}

export function ModelStatusSql(Base: any = Sample) {
	abstract class AbstractBase extends Base {
		@Column({ default: '' })
		public statusId: string;
	}

	return AbstractBase;
};

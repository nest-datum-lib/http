import { Column } from 'typeorm';

class Sample {}

export function ModelStatus(Base: any = Sample) {
	abstract class AbstractBase extends Base {
		@Column()
		public statusId: number = 0;
	}

	return AbstractBase;
};

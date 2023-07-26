import { Column } from 'typeorm';

class Sample {}

export function ModelUser(Base: any = Sample) {
	abstract class AbstractBase extends Base {
		@Column()
		public userId: number = 0;
	}

	return AbstractBase;
};

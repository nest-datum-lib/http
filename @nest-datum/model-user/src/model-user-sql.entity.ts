import { Column } from 'typeorm';

class Sample {}

export function ModelUserSql(Base: any = Sample) {
	abstract class AbstractBase extends Base {
		@Column({ default: '' })
		public userId: string;
	}

	return AbstractBase;
};

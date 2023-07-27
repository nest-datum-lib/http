import { Column } from 'typeorm';

class Sample {
}

export function ModelUserSql(Base: any = Sample) {
	class AbstractBase extends Base {
		@Column({ default: '' })
		public userId: string;
	}

	return AbstractBase;
};

import { Column } from 'typeorm';

class Sample {
}

export function ModelSqlCreator(Base: any = Sample) {
	class AbstractBase extends Base {
		@Column({ default: '' })
		public creatorId: string;
	}

	return AbstractBase;
};

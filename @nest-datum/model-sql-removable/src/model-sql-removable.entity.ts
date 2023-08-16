import { Column } from 'typeorm';

class Sample {
}

export function ModelSqlRemovable(Base: any = Sample) {
	class AbstractBase extends Base {
		@Column('boolean', { default: false })
		public isDeleted: boolean = false;

		@Column('boolean', { default: false })
		public isNotDelete: boolean = false;
	}

	return AbstractBase;
};

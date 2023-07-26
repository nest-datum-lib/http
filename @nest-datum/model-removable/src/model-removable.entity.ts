import { Column } from 'typeorm';

class Sample {}

export function ModelRemovable(Base: any = Sample) {
	abstract class AbstractBase extends Base {
		@Column('boolean', { default: false })
		public isDeleted: boolean = false;

		@Column('boolean', { default: false })
		public isNotDeleted: boolean = false;
	}

	return AbstractBase;
};

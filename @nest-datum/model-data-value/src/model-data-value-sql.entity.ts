import { Column } from 'typeorm';

class Sample {}

export function ModelDataValueSql(Base: any = Sample) {
	abstract class AbstractBase extends Base {
		@Column('longtext')
		public value: string = '';
	}

	return AbstractBase;
};

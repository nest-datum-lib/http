import { Column } from 'typeorm';

class Sample {
}

export function ModelDataValueSql(Base: any = Sample) {
	class AbstractBase extends Base {
		@Column('longtext')
		public value: string = '';
	}

	return AbstractBase;
};

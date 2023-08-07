import { Column } from 'typeorm';

class Sample {
}

export function ModelSqlDataValue(Base: any = Sample) {
	class AbstractBase extends Base {
		@Column('longtext')
		public dataValue: string = '';
	}

	return AbstractBase;
};

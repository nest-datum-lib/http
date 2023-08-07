import { PrimaryGeneratedColumn } from 'typeorm';

class Sample {
}

export function ModelSql(Base: any = Sample) {
	class AbstractBase extends Base {
		@PrimaryGeneratedColumn('uuid')
		public id: string;
	};

	return AbstractBase;
};

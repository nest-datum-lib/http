import { PrimaryGeneratedColumn } from 'typeorm';

class Sample {}

export function Model(Base: any = Sample) {
	abstract class AbstractBase extends Base {
		@PrimaryGeneratedColumn('uuid')
		public id: string;
	};

	return AbstractBase;
};

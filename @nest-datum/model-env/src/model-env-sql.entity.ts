import { 
	Column,
	Index,
} from 'typeorm';

class Sample {}

export function ModelEnvSql(Base: any = Sample) {
	abstract class AbstractBase extends Base {
		@Column({ default: '' })
		@Index()
		public envKey: string;
	}

	return AbstractBase;
};

import { 
	Column,
	Index,
} from 'typeorm';

class Sample {
}

export function ModelSqlEnv(Base: any = Sample) {
	class AbstractBase extends Base {
		@Column({ default: '' })
		@Index()
		public envKey: string;
	}

	return AbstractBase;
};

import { 
	Column,
	Index,
} from 'typeorm';

class Sample {}

export function ModelEnv(Base: any = Sample) {
	abstract class AbstractBase extends Base {
		@Column({ default: '' })
		@Index()
		public envKey: string;
	}

	return AbstractBase;
};

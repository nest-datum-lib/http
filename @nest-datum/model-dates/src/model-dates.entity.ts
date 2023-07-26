import { 
	CreateDateColumn,
	UpdateDateColumn, 
} from 'typeorm';

class Sample {}

export function ModelDates(Base: any = Sample) {
	abstract class AbstractBase extends Base {
		@CreateDateColumn({ 
			type: 'timestamp', 
			precision: null,
			default: () => 'CURRENT_TIMESTAMP', 
		})
		public createdAt: Date;

		@UpdateDateColumn({ 
			type: 'timestamp', 
			precision: null,
			default: () => 'CURRENT_TIMESTAMP',
			onUpdate: 'CURRENT_TIMESTAMP', 
		})
		public updatedAt: Date;
	}

	return AbstractBase;
};

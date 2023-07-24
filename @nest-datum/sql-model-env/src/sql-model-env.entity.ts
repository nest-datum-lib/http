import { 
	Column,
	Index,
} from 'typeorm';
import { SqlModelEntity } from '@nest-datum/sql-model';

export class SqlModelEnvEntity extends SqlModelEntity {
	@Column({ default: '' })
	@Index()
	public env: string;
}

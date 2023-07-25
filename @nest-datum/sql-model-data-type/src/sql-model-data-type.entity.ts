import { 
	Column,
	Index,
} from 'typeorm';
import { SqlModelEntity } from '@nest-datum/sql-model';

export class SqlModelDataTypeEntity extends SqlModelEntity {
	@Column({ default: '' })
	@Index()
	public dataTypeId: string;
}

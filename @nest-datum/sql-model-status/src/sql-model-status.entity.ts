import { Column } from 'typeorm';
import { SqlModelEntity } from '@nest-datum/sql-model';

export class SqlModelStatusEntity extends SqlModelEntity {
	@Column()
	public statusId: number = 0;
}

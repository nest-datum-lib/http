import { Column } from 'typeorm';
import { SqlModelEntity } from '@nest-datum/sql-model';

export class SqlModelUserEntity extends SqlModelEntity {
	@Column()
	public userId: number = 0;
}

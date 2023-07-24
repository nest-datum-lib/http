import { Column } from 'typeorm';
import { SqlModelEntity } from '@nest-datum/sql-model';

export class SqlModelRemovableEntity extends SqlModelEntity {
	@Column('boolean', { default: false })
	public isDeleted: boolean = false;

	@Column('boolean', { default: false })
	public isNotDeleted: boolean = false;
}

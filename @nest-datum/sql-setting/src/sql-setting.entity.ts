import { Column } from 'typeorm';
import { SqlModelEntity } from '@nest-datum/sql-model';
import { SqlModelEnvEntity } from '@nest-datum/sql-model-env';
import { SqlModelDataTypeEntity } from '@nest-datum/sql-model-data-type';
import { SqlModelRemovableEntity } from '@nest-datum/sql-model-removable';
import { SqlModelUserEntity } from '@nest-datum/sql-model-user';
import { extender } from '@nest-datum-utils/extender';

const SqlModelEntityExtends = extender(SqlModelEntity, [ 
	SqlModelEnvEntity, 
	SqlModelDataTypeEntity,
	SqlModelRemovableEntity,
	SqlModelUserEntity, 
]);

export class SqlSettingEntity extends SqlModelEntityExtends {
	@Column({ default: '' })
	public value: string;

	@Column({ default: '' })
	public regex: string;
}

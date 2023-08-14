import { 
	Entity,
	OneToMany,
} from 'typeorm';
import { AccessSql } from '@nest-datum/access-sql';
import { AccessRole } from '../access-role/access-role.entity';

@Entity()
export class Access extends AccessSql {
	@OneToMany(() => AccessRole, (accessRole) => accessRole.access, {
		cascade: true,
	})
	public accessRoles: AccessRole[];
}

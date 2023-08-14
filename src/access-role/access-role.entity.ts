import { 
	Entity,
	Column,
	ManyToOne,
} from 'typeorm';
import { AccessSqlRole } from '@nest-datum/access-sql';
import { Access } from '../access/access.entity';

@Entity()
export class AccessRole extends AccessSqlRole {
	@Column()
	public accessId: string;

	@ManyToOne(() => Access, (access) => access.accessRoles, {
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	})
	public access: Access;
}

import { 
	Entity, 
	Column,
	ManyToOne,
} from 'typeorm';
import { RoleAccess as RoleAccessBase } from '@nest-datum/access';
import { Access } from '../access/access.entity';

@Entity()
export class RoleAccess extends RoleAccessBase {
	@Column()
	public accessId: string;
}

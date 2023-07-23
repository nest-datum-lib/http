import { 
	PrimaryGeneratedColumn,
	Entity, 
	Column,
	Index,
	OneToMany,
} from 'typeorm';
import { SqlModelEntity } from '@nest-datum/sql-model';

@Entity()
export class Route extends SqlModelEntity {
}

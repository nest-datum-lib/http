import { 
	PrimaryGeneratedColumn,
	Column,
	Index,
	CreateDateColumn,
	UpdateDateColumn,
} from 'typeorm';
import { SqlEntity } from '@nest-datum/sql';

export class SqlModelEntity extends SqlEntity {
	@PrimaryGeneratedColumn('uuid')
	public id: string;

	@Column()
	@Index()
	public name: string;

	@Column({ default: '' })
	@Index()
	public description: string;

	@CreateDateColumn({ 
		type: 'timestamp', 
		precision: null,
		default: () => 'CURRENT_TIMESTAMP', 
	})
	public createdAt: Date;

	@UpdateDateColumn({ 
		type: 'timestamp', 
		precision: null,
		default: () => 'CURRENT_TIMESTAMP',
		onUpdate: 'CURRENT_TIMESTAMP', 
	})
	public updatedAt: Date;
}

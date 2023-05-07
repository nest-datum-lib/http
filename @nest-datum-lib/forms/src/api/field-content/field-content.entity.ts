import { 
	PrimaryGeneratedColumn,
	Entity, 
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	ManyToOne,
	OneToMany,
} from 'typeorm';
import { Field } from '../field/field.entity';
import { Content } from '../content/content.entity';

@Entity()
export class FieldContent {
	@PrimaryGeneratedColumn('uuid')
	public id: string;

	@Column({ default: '' })
	public userId: string;

	@Column({ default: '' })
	public fieldId: string;

	@ManyToOne(() => Field, (field) => field.fieldContents, {
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	})
	public field: Field;

	@Column({ default: '' })
	public contentId: string;

	@ManyToOne(() => Content, (content) => content.fieldContents, {
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	})
	public content: Content;

	@Column('text', {
		nullable: true,
	})
	public value: string;

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

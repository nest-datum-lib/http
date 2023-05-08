import { 
	PrimaryGeneratedColumn,
	Entity, 
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	ManyToOne,
} from 'typeorm';

@Entity()
export class Report {
	@PrimaryGeneratedColumn('uuid')
	public id: string;

	@Column()
	public lensaId: string;

	@Column({ default: '' })
	public targetId: string;

	@Column({ default: '' })
	public source: string;

	@Column({ default: '' })
	public candidateSource: string;

	@Column({ default: '' })
	public customerCategory: string;

	@Column()
	public fileId: string;

	@Column({ default: '' })
	public language: string;

	@Column({ default: '' })
	public jobTitle: string;

	@Column({ default: '' })
	public firstName: string;

	@Column({ default: '' })
	public email: string;

	@Column({ default: '' })
	public state: string;

	@Column({ default: '' })
	public city: string;

	@Column('boolean', { default: false })
	public isDeleted: boolean = false;

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

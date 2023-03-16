import { 
	Entity,
	Column, 
	ManyToOne,
	OneToMany,
} from 'typeorm';
import { OptionOption } from '@nest-datum/option';
import { TypeTypeTypeOption } from '../type-type-type-option/type-type-type-option.entity';
import { TypeOption } from '../type-option/type-option.entity';
import { Type } from '../type/type.entity';

@Entity()
export class TypeTypeOption extends OptionOption {
	@Column()
	public typeOptionId: string;

	@ManyToOne(() => TypeOption, (typeOption) => typeOption.typeTypeOptions)
	public typeOption: TypeOption;

	@Column()
	public typeId: string;

	@ManyToOne(() => Type, (type) => type.typeTypeOptions)
	public type: Type;

	@OneToMany(() => TypeTypeTypeOption, (typeTypeTypeOption) => typeTypeTypeOption.typeTypeOption)
	public typeTypeTypeOptions: TypeTypeTypeOption[];
}
import { 
	Entity,
	Column, 
	ManyToOne,
	OneToMany,
} from 'typeorm';
import { Bind } from '@nest-datum/bind';
import { TemplateTemplateTemplateOption } from '../template-template-template-option/template-template-template-option.entity';
import { TemplateOption } from '../template-option/template-option.entity';
import { Template } from '../template/template.entity';

@Entity()
export class TemplateTemplateOption extends Bind {
	@Column()
	public templateOptionId: string;

	@ManyToOne(() => TemplateOption, (templateOption) => templateOption.templateTemplateOptions)
	public templateOption: TemplateOption;

	@Column()
	public templateId: string;

	@ManyToOne(() => Template, (template) => template.templateTemplateOptions)
	public template: Template;

	@OneToMany(() => TemplateTemplateTemplateOption, (templateTemplateTemplateOption) => templateTemplateTemplateOption.templateTemplateOption)
	public templateTemplateTemplateOptions: TemplateTemplateTemplateOption[];
}
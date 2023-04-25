import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	TransportModule,
	TransportService, 
} from '@nest-datum/transport';
import { EmailService } from './email.service';
import { Template } from '../template/template.entity';
import { TemplateTemplateTemplateOption } from '../template-template-template-option/template-template-template-option.entity';
import { TemplateTemplateOption } from '../template-template-option/template-template-option.entity';
import { Letter } from '../letter/letter.entity';
import { LetterLetterLetterOption } from '../letter-letter-letter-option/letter-letter-letter-option.entity';
import { LetterLetterOption } from '../letter-letter-option/letter-letter-option.entity';
import { Report } from '../report/report.entity';

@Module({
	controllers: [],
	imports: [
		TypeOrmModule.forFeature([ 
			TemplateTemplateOption,
			TemplateTemplateTemplateOption,
			Template,
			LetterLetterOption,
			LetterLetterLetterOption,
			Letter,
			Report,
		]),
		TransportModule,
	],
	providers: [
		TransportService,
		EmailService, 
	],
})
export class EmailModule {
}


import { 
	Module,
	NestModule,
	MiddlewareConsumer, 
	RequestMethod,
} from '@nestjs/common';
import { 
	ReplicaModule,
	ReplicaService, 
} from '@nest-datum/replica';
import { 
	TransportModule,
	TransportService, 
} from '@nest-datum/transport';
import { TemplateTemplateOptionController } from './template-template-option.controller';

@Module({
	imports: [ 
		ReplicaModule,
		TransportModule, 
	],
	controllers: [ TemplateTemplateOptionController ],
	providers: [ 
		ReplicaService,
		TransportService, 
	],
})
export class TemplateTemplateOptionModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

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
import { TemplateOptionController } from './template-option.controller';

@Module({
	imports: [ 
		ReplicaModule,
		TransportModule, 
	],
	controllers: [ TemplateOptionController ],
	providers: [ 
		ReplicaService,
		TransportService, 
	],
})
export class TemplateOptionModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

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
import { TemplateStatusController } from './template-status.controller';

@Module({
	imports: [ 
		ReplicaModule,
		TransportModule, 
	],
	controllers: [ TemplateStatusController ],
	providers: [ 
		ReplicaService,
		TransportService, 
	],
})
export class TemplateStatusModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

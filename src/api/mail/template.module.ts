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
import { TemplateController } from './template.controller';

@Module({
	imports: [ 
		ReplicaModule,
		TransportModule, 
	],
	controllers: [ TemplateController ],
	providers: [ 
		ReplicaService,
		TransportService, 
	],
})
export class TemplateModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

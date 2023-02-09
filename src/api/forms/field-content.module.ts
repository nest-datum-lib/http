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
import { FieldContentController } from './field-content.controller';

@Module({
	imports: [ 
		ReplicaModule,
		TransportModule, 
	],
	controllers: [ FieldContentController ],
	providers: [ 
		ReplicaService,
		TransportService, 
	],
})
export class FieldContentModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

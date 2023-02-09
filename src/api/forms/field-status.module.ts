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
import { FieldStatusController } from './field-status.controller';

@Module({
	imports: [ 
		ReplicaModule,
		TransportModule, 
	],
	controllers: [ FieldStatusController ],
	providers: [ 
		ReplicaService,
		TransportService, 
	],
})
export class FieldStatusModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

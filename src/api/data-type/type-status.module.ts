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
import { TypeStatusController } from './type-status.controller';

@Module({
	imports: [ 
		ReplicaModule,
		TransportModule, 
	],
	controllers: [ TypeStatusController ],
	providers: [ 
		ReplicaService,
		TransportService, 
	],
})
export class TypeStatusModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

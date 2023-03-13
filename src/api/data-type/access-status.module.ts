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
import { AccessStatusController } from './access-status.controller';

@Module({
	imports: [ 
		ReplicaModule,
		TransportModule, 
	],
	controllers: [ AccessStatusController ],
	providers: [ 
		ReplicaService,
		TransportService, 
	],
})
export class AccessStatusModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

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
import { AccessController } from './access.controller';

@Module({
	imports: [ 
		ReplicaModule,
		TransportModule, 
	],
	controllers: [ AccessController ],
	providers: [ 
		ReplicaService,
		TransportService, 
	],
})
export class AccessModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

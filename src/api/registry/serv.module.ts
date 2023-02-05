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
import { ServController } from './serv.controller';

@Module({
	imports: [ 
		ReplicaModule,
		TransportModule, 
	],
	controllers: [ ServController ],
	providers: [ 
		ReplicaService,
		TransportService, 
	],
})
export class ServModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

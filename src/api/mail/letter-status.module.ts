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
import { LetterStatusController } from './letter-status.controller';

@Module({
	imports: [ 
		ReplicaModule,
		TransportModule, 
	],
	controllers: [ LetterStatusController ],
	providers: [ 
		ReplicaService,
		TransportService, 
	],
})
export class LetterStatusModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

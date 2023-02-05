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
import { UserStatusController } from './user-status.controller';

@Module({
	imports: [ 
		ReplicaModule,
		TransportModule, 
	],
	controllers: [ UserStatusController ],
	providers: [ 
		ReplicaService,
		TransportService, 
	],
})
export class UserStatusModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

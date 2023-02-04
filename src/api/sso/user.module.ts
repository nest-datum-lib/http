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
import { UserController } from './user.controller';

@Module({
	imports: [ 
		ReplicaModule,
		TransportModule, 
	],
	controllers: [ UserController ],
	providers: [ 
		ReplicaService,
		TransportService, 
	],
})
export class UserModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

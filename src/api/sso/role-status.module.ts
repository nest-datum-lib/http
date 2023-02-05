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
import { RoleStatusController } from './role-status.controller';

@Module({
	imports: [ 
		ReplicaModule,
		TransportModule, 
	],
	controllers: [ RoleStatusController ],
	providers: [ 
		ReplicaService,
		TransportService, 
	],
})
export class RoleStatusModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

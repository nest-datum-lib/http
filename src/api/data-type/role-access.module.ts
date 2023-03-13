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
import { RoleAccessController } from './role-access.controller';

@Module({
	imports: [ 
		ReplicaModule,
		TransportModule, 
	],
	controllers: [ RoleAccessController ],
	providers: [ 
		ReplicaService,
		TransportService, 
	],
})
export class RoleAccessModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

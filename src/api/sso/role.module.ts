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
import { RoleController } from './role.controller';

@Module({
	imports: [ 
		ReplicaModule,
		TransportModule, 
	],
	controllers: [ RoleController ],
	providers: [ 
		ReplicaService,
		TransportService, 
	],
})
export class RoleModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

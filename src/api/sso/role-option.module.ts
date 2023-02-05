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
import { RoleOptionController } from './role-option.controller';

@Module({
	imports: [ 
		ReplicaModule,
		TransportModule, 
	],
	controllers: [ RoleOptionController ],
	providers: [ 
		ReplicaService,
		TransportService, 
	],
})
export class RoleOptionModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

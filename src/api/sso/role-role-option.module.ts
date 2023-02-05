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
import { RoleRoleOptionController } from './role-role-option.controller';

@Module({
	imports: [ 
		ReplicaModule,
		TransportModule, 
	],
	controllers: [ RoleRoleOptionController ],
	providers: [ 
		ReplicaService,
		TransportService, 
	],
})
export class RoleRoleOptionModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

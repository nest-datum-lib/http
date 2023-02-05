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
import { UserOptionController } from './user-option.controller';

@Module({
	imports: [ 
		ReplicaModule,
		TransportModule, 
	],
	controllers: [ UserOptionController ],
	providers: [ 
		ReplicaService,
		TransportService, 
	],
})
export class UserOptionModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

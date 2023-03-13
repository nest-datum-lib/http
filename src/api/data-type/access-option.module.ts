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
import { AccessOptionController } from './access-option.controller';

@Module({
	imports: [ 
		ReplicaModule,
		TransportModule, 
	],
	controllers: [ AccessOptionController ],
	providers: [ 
		ReplicaService,
		TransportService, 
	],
})
export class AccessOptionModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

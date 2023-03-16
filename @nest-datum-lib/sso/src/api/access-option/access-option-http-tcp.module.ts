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
import { AccessOptionHttpTcpController } from './access-option-http-tcp.controller';

@Module({
	imports: [ 
		ReplicaModule,
		TransportModule, 
	],
	controllers: [ AccessOptionHttpTcpController ],
	providers: [ 
		ReplicaService,
		TransportService, 
	],
})
export class AccessOptionHttpTcpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
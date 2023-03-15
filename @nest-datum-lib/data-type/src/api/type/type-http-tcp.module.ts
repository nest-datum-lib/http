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
import { TypeHttpTcpController } from './type-http-tcp.controller';

@Module({
	imports: [ 
		ReplicaModule,
		TransportModule, 
	],
	controllers: [ TypeHttpTcpController ],
	providers: [ 
		ReplicaService,
		TransportService, 
	],
})
export class TypeHttpTcpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

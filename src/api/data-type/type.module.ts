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
import { TypeController } from './type.controller';

@Module({
	imports: [ 
		ReplicaModule,
		TransportModule, 
	],
	controllers: [ TypeController ],
	providers: [ 
		ReplicaService,
		TransportService, 
	],
})
export class TypeModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

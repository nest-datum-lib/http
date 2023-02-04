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
import { TypeTypeOptionController } from './type-type-option.controller';

@Module({
	imports: [ 
		ReplicaModule,
		TransportModule, 
	],
	controllers: [ TypeTypeOptionController ],
	providers: [ 
		ReplicaService,
		TransportService, 
	],
})
export class TypeTypeOptionModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

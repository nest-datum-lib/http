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
import { TypeOptionController } from './type-option.controller';

@Module({
	imports: [ 
		ReplicaModule,
		TransportModule, 
	],
	controllers: [ TypeOptionController ],
	providers: [ 
		ReplicaService,
		TransportService, 
	],
})
export class TypeOptionModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

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
import { FieldController } from './field.controller';

@Module({
	imports: [ 
		ReplicaModule,
		TransportModule, 
	],
	controllers: [ FieldController ],
	providers: [ 
		ReplicaService,
		TransportService, 
	],
})
export class FieldModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

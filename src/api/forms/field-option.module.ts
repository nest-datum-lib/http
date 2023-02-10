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
import { FieldOptionController } from './field-option.controller';

@Module({
	imports: [ 
		ReplicaModule,
		TransportModule, 
	],
	controllers: [ FieldOptionController ],
	providers: [ 
		ReplicaService,
		TransportService, 
	],
})
export class FieldOptionModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
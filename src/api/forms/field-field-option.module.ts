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
import { FieldFieldOptionController } from './field-field-option.controller';

@Module({
	imports: [ 
		ReplicaModule,
		TransportModule, 
	],
	controllers: [ FieldFieldOptionController ],
	providers: [ 
		ReplicaService,
		TransportService, 
	],
})
export class FieldFieldOptionModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

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
import { FormStatusController } from './form-status.controller';

@Module({
	imports: [ 
		ReplicaModule,
		TransportModule, 
	],
	controllers: [ FormStatusController ],
	providers: [ 
		ReplicaService,
		TransportService, 
	],
})
export class FormStatusModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

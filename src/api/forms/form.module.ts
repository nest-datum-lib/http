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
import { FormController } from './form.controller';

@Module({
	imports: [ 
		ReplicaModule,
		TransportModule, 
	],
	controllers: [ FormController ],
	providers: [ 
		ReplicaService,
		TransportService, 
	],
})
export class FormModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

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
import { FormFieldController } from './form-field.controller';

@Module({
	imports: [ 
		ReplicaModule,
		TransportModule, 
	],
	controllers: [ FormFieldController ],
	providers: [ 
		ReplicaService,
		TransportService, 
	],
})
export class FormFieldModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

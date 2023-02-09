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
import { FormOptionController } from './form-option.controller';

@Module({
	imports: [ 
		ReplicaModule,
		TransportModule, 
	],
	controllers: [ FormOptionController ],
	providers: [ 
		ReplicaService,
		TransportService, 
	],
})
export class FormOptionModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

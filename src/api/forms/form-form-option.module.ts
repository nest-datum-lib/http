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
import { FormFormOptionController } from './form-form-option.controller';

@Module({
	imports: [ 
		ReplicaModule,
		TransportModule, 
	],
	controllers: [ FormFormOptionController ],
	providers: [ 
		ReplicaService,
		TransportService, 
	],
})
export class FormFormOptionModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

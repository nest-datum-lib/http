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
import { ContentStatusController } from './content-status.controller';

@Module({
	imports: [ 
		ReplicaModule,
		TransportModule, 
	],
	controllers: [ ContentStatusController ],
	providers: [ 
		ReplicaService,
		TransportService, 
	],
})
export class ContentStatusModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

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
import { ContentController } from './content.controller';

@Module({
	imports: [ 
		ReplicaModule,
		TransportModule, 
	],
	controllers: [ ContentController ],
	providers: [ 
		ReplicaService,
		TransportService, 
	],
})
export class ContentModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

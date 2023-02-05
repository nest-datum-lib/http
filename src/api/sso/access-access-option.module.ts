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
import { AccessAccessOptionController } from './access-access-option.controller';

@Module({
	imports: [ 
		ReplicaModule,
		TransportModule, 
	],
	controllers: [ AccessAccessOptionController ],
	providers: [ 
		ReplicaService,
		TransportService, 
	],
})
export class AccessAccessOptionModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

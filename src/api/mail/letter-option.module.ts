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
import { LetterOptionController } from './letter-option.controller';

@Module({
	imports: [ 
		ReplicaModule,
		TransportModule, 
	],
	controllers: [ LetterOptionController ],
	providers: [ 
		ReplicaService,
		TransportService, 
	],
})
export class LetterOptionModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

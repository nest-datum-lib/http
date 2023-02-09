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
import { LetterLetterOptionController } from './letter-letter-option.controller';

@Module({
	imports: [ 
		ReplicaModule,
		TransportModule, 
	],
	controllers: [ LetterLetterOptionController ],
	providers: [ 
		ReplicaService,
		TransportService, 
	],
})
export class LetterLetterOptionModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

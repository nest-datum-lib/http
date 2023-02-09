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
import { ReportController } from './report.controller';

@Module({
	imports: [ 
		ReplicaModule,
		TransportModule, 
	],
	controllers: [ ReportController ],
	providers: [ 
		ReplicaService,
		TransportService, 
	],
})
export class ReportModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

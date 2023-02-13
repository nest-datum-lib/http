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
import { ReportStatusController } from './report-status.controller';

@Module({
	imports: [ 
		ReplicaModule,
		TransportModule, 
	],
	controllers: [ ReportStatusController ],
	providers: [ 
		ReplicaService,
		TransportService, 
	],
})
export class ReportStatusModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

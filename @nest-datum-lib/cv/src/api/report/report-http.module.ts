import { 
	Module,
	NestModule,
	MiddlewareConsumer, 
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	CacheModule,
	CacheService, 
} from '@nest-datum/cache';
import { ReportService } from './report.service';
import { ReportHttpController } from './report-http.controller';
import { Report } from './report.entity';

@Module({
	controllers: [ ReportHttpController ],
	imports: [
		TypeOrmModule.forFeature([ Report ]),
		CacheModule,
	],
	providers: [
		CacheService,
		ReportService, 
	],
})
export class ReportHttpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

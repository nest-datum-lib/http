import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	CacheModule,
	CacheService, 
} from '@nest-datum/cache';
import { ReportService } from './report.service';
import { ReportTcpController } from './report-tcp.controller';
import { Report } from './report.entity';

@Module({
	controllers: [ ReportTcpController ],
	imports: [
		TypeOrmModule.forFeature([ Report ]),
		CacheModule,
	],
	providers: [
		CacheService,
		ReportService, 
	],
})
export class ReportTcpModule {
}


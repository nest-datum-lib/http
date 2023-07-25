import { 
	Module,
	NestModule,
	MiddlewareConsumer,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SqlStatusModule } from '@nest-datum/sql-status';
import { Route } from '../route/route.entity';
import { RouteStatusService } from './route-status.service';
import { RouteStatusController } from './route-status.controller';
import { RouteStatus } from './route-status.entity';

@Module({
	controllers: [ RouteStatusController ],
	imports: [
		TypeOrmModule.forFeature([
			RouteStatus,
			Route,
		]),
	],
	providers: [ 
		RouteStatusService,
	],
})
export class RouteStatusModule extends SqlStatusModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

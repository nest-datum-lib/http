import { Mixin } from 'ts-mixer';
import { 
	Module,
	NestModule,
	MiddlewareConsumer,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SqlModelModule } from '@nest-datum/sql-model';
import { SqlModelEnvModule } from '@nest-datum/sql-model-env';
import { SqlModelRemovableModule } from '@nest-datum/sql-model-removable';
import { SqlModelStatusModule } from '@nest-datum/sql-model-status';
import { SqlModelUserModule } from '@nest-datum/sql-model-user';
import { RouteStatus } from '../route-status/route-status.entity';
import { RouteService } from './route.service';
import { RouteController } from './route.controller';
import { Route } from './route.entity';

@Module({
	controllers: [ RouteController ],
	imports: [
		TypeOrmModule.forFeature([
			RouteStatus,
			Route,
		]),
	],
	providers: [ 
		RouteService,
	],
})
export class RouteModule extends Mixin(SqlModelModule, SqlModelEnvModule, SqlModelRemovableModule, SqlModelStatusModule, SqlModelUserModule) implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

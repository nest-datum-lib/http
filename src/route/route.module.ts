import { 
	Module,
	NestModule,
	MiddlewareConsumer,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SqlModelModule } from '@nest-datum/sql-model';
import { RouteService } from './route.service';
import { RouteController } from './route.controller';
import { Route } from './route.entity';

@Module({
	controllers: [ RouteController ],
	imports: [
		TypeOrmModule.forFeature([
			Route,
		]),
	],
	providers: [ 
		RouteService,
	],
})
export class RouteModule extends SqlModelModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

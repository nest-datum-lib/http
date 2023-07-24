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
import { extender } from '@nest-datum-utils/extender';
import { RouteService } from './route.service';
import { RouteController } from './route.controller';
import { Route } from './route.entity';

const SqlModelModuleExtends = extender(SqlModelModule, [ 
	SqlModelEnvModule, 
	SqlModelRemovableModule, 
	SqlModelStatusModule, 
	SqlModelUserModule, 
]);

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
export class RouteModule extends SqlModelModuleExtends implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}

import { 
	Module,
	NestModule,
	MiddlewareConsumer, 
	RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheService } from 'nest-datum/cache/src';
import { 
	BalancerRepository,
	BalancerService, 
} from 'nest-datum/balancer/src';
import { SettingService } from './setting.service';
import { SettingController } from './setting.controller';
import { Setting } from './setting.entity';

@Module({
	controllers: [ SettingController ],
	imports: [
		TypeOrmModule.forFeature([ Setting ]),
	],
	providers: [
		BalancerRepository, 
		BalancerService,
		CacheService,
		SettingService, 
	],
})
export class SettingModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
			.apply(
				// ExampleMiddleware,
			)
			.forRoutes({
				path: `${process.env.APP_NAME}/setting`,
				method: RequestMethod.GET,
			});
		consumer
			.apply(
				// ExampleMiddleware,
			)
			.forRoutes({
				path: `${process.env.APP_NAME}/setting/:id`,
				method: RequestMethod.GET,
			});
		consumer
			.apply(
				// ExampleMiddleware,
			)
			.forRoutes({
				path: `${process.env.APP_NAME}/setting`,
				method: RequestMethod.DELETE,
			});
		consumer
			.apply(
				// ExampleMiddleware,
			)
			.forRoutes({
				path: `${process.env.APP_NAME}/setting/:id`,
				method: RequestMethod.DELETE,
			});
		consumer
			.apply(
				// ExampleMiddleware,
			)
			.forRoutes({
				path: `${process.env.APP_NAME}/setting`,
				method: RequestMethod.POST,
			});
		consumer
			.apply(
				// ExampleMiddleware,
			)
			.forRoutes({
				path: `${process.env.APP_NAME}/setting/:id`,
				method: RequestMethod.PATCH,
			});
	}
}


import { 
	Module,
	NestModule,
	MiddlewareConsumer, 
	RequestMethod,
} from '@nestjs/common';
import { 
	BalancerRepository,
	BalancerService, 
} from 'nest-datum/balancer/src';
import { RoleAccessController } from './role-access.controller';

@Module({
	imports: [],
	controllers: [ RoleAccessController ],
	providers: [ 
		BalancerRepository,
		BalancerService,
	],
})
export class RoleAccessModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
			.apply(
				// ExampleMiddleware,
			)
			.forRoutes({
				path: `${process.env.SERVICE_SSO}/role/access`,
				method: RequestMethod.GET,
			});
		consumer
			.apply(
				// ExampleMiddleware,
			)
			.forRoutes({
				path: `${process.env.SERVICE_SSO}/role/access/:id`,
				method: RequestMethod.GET,
			});
		// consumer
		// 	.apply(
		// 		// ExampleMiddleware,
		// 	)
		// 	.forRoutes({
		// 		path: `${process.env.SERVICE_SSO}/role/access`,
		// 		method: RequestMethod.DELETE,
		// 	});
		consumer
			.apply(
				// ExampleMiddleware,
			)
			.forRoutes({
				path: `${process.env.SERVICE_SSO}/role/access/:id`,
				method: RequestMethod.DELETE,
			});
		// consumer
		// 	.apply(
		// 		// ExampleMiddleware,
		// 	)
		// 	.forRoutes({
		// 		path: `${process.env.SERVICE_SSO}/form/:id/field`,
		// 		method: RequestMethod.POST,
		// 	});
	}
}

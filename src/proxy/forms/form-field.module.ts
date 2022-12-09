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
import { FormFieldController } from './form-field.controller';

@Module({
	imports: [],
	controllers: [ FormFieldController ],
	providers: [ 
		BalancerRepository,
		BalancerService,
	],
})
export class FormModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
			.apply(
				// ExampleMiddleware,
			)
			.forRoutes({
				path: `${process.env.SERVICE_FORMS}/form/field`,
				method: RequestMethod.GET,
			});
		consumer
			.apply(
				// ExampleMiddleware,
			)
			.forRoutes({
				path: `${process.env.SERVICE_FORMS}/form/field/:id`,
				method: RequestMethod.GET,
			});
		// consumer
		// 	.apply(
		// 		// ExampleMiddleware,
		// 	)
		// 	.forRoutes({
		// 		path: `${process.env.SERVICE_FORMS}/form/field`,
		// 		method: RequestMethod.DELETE,
		// 	});
		consumer
			.apply(
				// ExampleMiddleware,
			)
			.forRoutes({
				path: `${process.env.SERVICE_FORMS}/form/field/:id`,
				method: RequestMethod.DELETE,
			});
		// consumer
		// 	.apply(
		// 		// ExampleMiddleware,
		// 	)
		// 	.forRoutes({
		// 		path: `${process.env.SERVICE_FORMS}/form/:id/field`,
		// 		method: RequestMethod.POST,
		// 	});
	}
}

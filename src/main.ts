require('dotenv').config();

import { v4 as uuidv4 } from 'uuid';
import { NestFactory } from '@nestjs/core';
import { 
	SwaggerModule, 
	DocumentBuilder, 
} from '@nestjs/swagger';
import { 
	BalancerModule,
	BalancerService, 
} from 'nest-datum/balancer/src';
import { 
	getEnvValue,
	onExit,
	onWarning,
	onUncaughtException, 
} from 'nest-datum/common/src';
import { AppModule } from './app.module';

process.on('exit', onExit);
process.on('warning', onWarning);
process.on('uncaughtException', onUncaughtException);

async function createApp() {
	const port = Number(process.env.APP_PORT);
	const app = await NestFactory.create(AppModule);
	const balancer = await NestFactory.create(BalancerModule);
	const balancerService = balancer.get(BalancerService);

	if (process.env.SWAGGER_ROUTE) {
		const config = new DocumentBuilder()
			.setTitle('HTTP api')
			.setDescription('HTTP API of all ecosystem microservices.')
			.setVersion('1.0')
			.build();
		const document = SwaggerModule.createDocument(app, config);
			
		SwaggerModule.setup(process.env.SWAGGER_ROUTE, app, document);
	}
	app.enableCors();

	const registred = await balancerService.registry({
		email: process['USER_ROOT_EMAIL'],
		login: process['USER_ROOT_LOGIN'],
		password: process['USER_ROOT_PASSWORD'],
	});

	if (registred) {
		await app.listen(port, () => console.log('Replica listening on port:', port));
	}
	else {
		console.error('Error while adding replica to services registry in redis. Check the settings in the .env file.');

		await app.close();
	}
	await balancer.close();
};

async function bootstrap() {
	process['USER_ROOT_EMAIL'] = process.env.USER_ROOT_EMAIL;
	process['USER_ROOT_LOGIN'] = process.env.USER_ROOT_LOGIN;
	process['USER_ROOT_PASSWORD'] = process.env.USER_ROOT_PASSWORD;
	process['PROJECT_ID'] = getEnvValue('PROJECT_ID');
	process['APP_ID'] = getEnvValue('APP_ID') || uuidv4();
	process['JWT_SECRET_ACCESS_KEY'] = getEnvValue('JWT_SECRET_ACCESS_KEY');
	process['JWT_SECRET_REFRESH_KEY'] = getEnvValue('JWT_SECRET_REFRESH_KEY');

	await createApp();
};

bootstrap();

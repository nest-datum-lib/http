require('dotenv').config();

import { NestFactory } from '@nestjs/core';
import { 
	onExit,
	onWarning,
	onUncaughtException, 
} from '@nest-datum-common/process';
import { 
	TransportModule,
	TransportService, 
} from '@nest-datum/transport';
import { AppModule } from './app.module';

process.on('exit', onExit);
process.on('warning', onWarning);
process.on('uncaughtException', onUncaughtException);

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const transport = await NestFactory.create(TransportModule);
	const transportService = transport.get(TransportService);

	try {
		app.enableCors();

		await transportService.create();
		await app.listen(Number(process.env.APP_PORT), () => console.log('Replica listening on port:', process.env.APP_PORT))
		await transport.close();
	}
	catch (err) {
		await app.close();
		
		console.error(err.message);
	}
};

bootstrap();

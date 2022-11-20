require('dotenv').config();

import { NestFactory } from '@nestjs/core';
import { RegistryService } from '@nest-datum/services';
import { 
	SwaggerModule, 
	DocumentBuilder, 
} from '@nestjs/swagger';
import { RegistryModule } from './registry.module';
import { AppModule } from './app.module';

async function bootstrap() {
	try {
		const port = Number(process.env['TRANSPORT_PORT']);
		const app = await NestFactory.create(AppModule);
		const registry = await NestFactory.create(RegistryModule);
		const registryService = registry.get(RegistryService);

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
	
		await app.listen(port, () => console.log('Microservice listening on port:', port));
		await registryService.start();
		await registry.close();
	}
	catch (err) {
		console.error(`Microservice process of ${process.env.APP_ID} has failed with wrror ${err.message}`);
	}
}

bootstrap();

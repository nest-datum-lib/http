import { NestFactory } from '@nestjs/core';
import { TransportModule } from '@nest-datum/transport';

export class TransportHttpModule extends TransportModule {
	static async listen(Module, callback = () => console.log(`HTTP: port "${process.env.APP_HTTP_PORT}".`)) {
		return (await NestFactory.create(Module)).listen(Number(process.env.APP_HTTP_PORT), callback);
	}
}

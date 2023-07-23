import { Module } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { TransportModule } from '@nest-datum/transport';
import { TransportHttpService } from './transport-http.service';

@Module({
	imports: [],
	controllers: [],
	providers: [ 
		TransportHttpService, 
	],
})
export class TransportHttpModule extends TransportModule {
	static async listen(Module, callback = () => {}) {
		return (await NestFactory.create(Module)).listen(Number(process.env.APP_HTTP_PORT), callback);
	}
}

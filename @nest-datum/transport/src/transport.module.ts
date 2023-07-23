import { Module } from '@nestjs/common';
import { RedisModule } from '@nest-datum/redis';
import { TransportService } from './transport.service';

@Module({
	imports: [],
	controllers: [],
	providers: [ 
		TransportService, 
	],
})
export class TransportModule extends RedisModule {
	static async listen(Module, callback = () => {}) {
		return Module;
	}
}

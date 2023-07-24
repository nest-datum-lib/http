import { RedisModule } from '@nest-datum/redis';

export class TransportModule extends RedisModule {
	static async listen(Module, callback = () => {}) {
		return Module;
	}
}

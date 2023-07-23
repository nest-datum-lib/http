import { Module } from '@nestjs/common';
import { RedisModule } from '@nest-datum/redis';
import { CacheService } from './cache.service';

@Module({
	imports: [],
	controllers: [],
	providers: [ 
		CacheService, 
	],
})
export class CacheModule extends RedisModule {
}

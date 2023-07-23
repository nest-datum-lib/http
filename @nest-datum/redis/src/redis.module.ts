import { Module } from '@nestjs/common';
import { EntityModule } from '@nest-datum/entity';
import { RedisService } from './redis.service';

@Module({
	imports: [],
	controllers: [],
	providers: [ 
		RedisService, 
	],
})
export class RedisModule extends EntityModule {
}

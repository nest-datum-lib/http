import { Module } from '@nestjs/common';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	redis,
	sql, 
} from '@nest-datum-common/config';
import { 
	ReplicaModule,
	ReplicaService, 
} from '@nest-datum/replica';
import { 
	TransportModule,
	TransportService, 
} from '@nest-datum/transport';
import {
	CacheModule, 
	CacheService, 
} from '@nest-datum/cache';
import { SeedService } from './seed.service';
import { Setting } from '../api/setting/setting.entity';
import { TypeStatus } from '../api/type-status/type-status.entity';
import { TypeTypeTypeOption } from '../api/type-type-type-option/type-type-type-option.entity';
import { TypeOption } from '../api/type-option/type-option.entity';
import { TypeTypeOption } from '../api/type-type-option/type-type-option.entity';
import { Type } from '../api/type/type.entity';
import { SettingSeeder } from './setting.seeder';
import { TypeStatusSeeder } from './type-status.seeder';
import { TypeOptionSeeder } from './type-option.seeder';
import { TypeSeeder } from './type.seeder';

@Module({
	controllers: [],
	imports: [
		RedisModule.forRoot(redis),
		TypeOrmModule.forRoot(sql),
		TypeOrmModule.forFeature([
			Setting,
			TypeStatus,
			TypeOption,
			TypeTypeOption,
			Type,
			TypeTypeTypeOption, 
		]),
		ReplicaModule,
		TransportModule,
		CacheModule,
	],
	providers: [
		ReplicaService,
		TransportService,
		CacheService,
		SeedService,
		SettingSeeder,
		TypeStatusSeeder,
		TypeOptionSeeder,
		TypeSeeder,
	]
})

export class SeedModule {
}

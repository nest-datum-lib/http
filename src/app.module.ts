import { RedisModule } from '@liaoliaots/nestjs-redis';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
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
import { 
	SqlModule,
	SqlService, 
} from '@nest-datum/sql';
import { 
	redis,
	sql, 
} from '@nest-datum-common/config';
import { SettingModule as ApiSettingModule } from './api/setting/setting.module';

import { SettingModule as ApiRegistrySettingModule } from './api/registry/setting.module';
import { ServModule as ApiRegistryServModule } from './api/registry/serv.module';

import { UserModule as ApiSsoUserModule } from './api/sso/user.module';

import { SettingModule as ApiDataTypeSettingModule } from './api/data-type/setting.module';
import { TypeModule as ApiDataTypeTypeModule } from './api/data-type/type.module';
import { TypeStatusModule as ApiDataTypeTypeStatusModule } from './api/data-type/type-status.module';
import { TypeOptionModule as ApiDataTypeTypeOptionModule } from './api/data-type/type-option.module';
import { TypeTypeOptionModule as ApiDataTypeTypeTypeOptionModule } from './api/data-type/type-type-option.module';

import { AppController } from './app.controller';

@Module({
	imports: [
		TypeOrmModule.forRoot(sql),
		RedisModule.forRoot(redis),
		ReplicaModule,
		TransportModule,
		CacheModule,
		SqlModule,
		ApiSettingModule,
		
		ApiRegistrySettingModule,
		ApiRegistryServModule,

		ApiSsoUserModule,
		
		ApiDataTypeSettingModule,
		ApiDataTypeTypeStatusModule,
		ApiDataTypeTypeOptionModule,
		ApiDataTypeTypeTypeOptionModule,
		ApiDataTypeTypeModule,
	],
	controllers: [ AppController ],
	providers: [
		ReplicaService,
		TransportService,
		CacheService,
		SqlService,
	],
})
export class AppModule {
}

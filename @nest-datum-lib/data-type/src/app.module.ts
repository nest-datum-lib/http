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
import { SettingTcpModule } from './api/setting';
import { AccessTcpModule } from './api/access';
import { AccessStatusTcpModule } from './api/access-status';
import { AccessOptionTcpModule } from './api/access-option';
import { AccessAccessOptionTcpModule } from './api/access-access-option';
import { RoleAccessTcpModule } from './api/role-access';
import { TypeTcpModule } from './api/type';
import { TypeStatusTcpModule } from './api/type-status';
import { TypeOptionTcpModule } from './api/type-option';
import { TypeTypeOptionTcpModule } from './api/type-type-option';
import { AppController } from './app.controller';

@Module({
	imports: [
		TypeOrmModule.forRoot(sql),
		RedisModule.forRoot(redis),
		ReplicaModule,
		TransportModule,
		CacheModule,
		SqlModule,
		SettingTcpModule,
		AccessTcpModule,
		AccessStatusTcpModule,
		AccessOptionTcpModule,
		AccessAccessOptionTcpModule,
		RoleAccessTcpModule,
		TypeTcpModule,
		TypeStatusTcpModule,
		TypeOptionTcpModule,
		TypeTypeOptionTcpModule,
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

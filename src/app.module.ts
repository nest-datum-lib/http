import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { provideConfigFromEnv } from '@nest-datum/sql';
import { SettingModule } from './setting/setting.module';
import { AccessModule } from './access/access.module';
import { AccessRoleModule } from './access-role/access-role.module';
import { AppController } from './app.controller';

@Module({
	imports: [
		TypeOrmModule.forRoot(provideConfigFromEnv()),
		SettingModule,
		AccessModule,
		AccessRoleModule,
	],
	controllers: [ AppController ],
	providers: [],
})
export class AppModule {
}

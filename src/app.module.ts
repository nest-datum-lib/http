import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { provideConfigFromEnv } from '@nest-datum/sql';
import { SettingModule } from './setting/setting.module';
import { RouteModule } from './route/route.module';
import { AppController } from './app.controller';

@Module({
	imports: [
		TypeOrmModule.forRoot(provideConfigFromEnv()),
		SettingModule,
		RouteModule,
	],
	controllers: [ AppController ],
	providers: [],
})
export class AppModule {
}

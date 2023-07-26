import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { provideConfigFromEnv } from '@nest-datum/sql';
import { SettingModule } from './setting/setting.module';
import { AppController } from './app.controller';

@Module({
	imports: [
		TypeOrmModule.forRoot(provideConfigFromEnv()),
		SettingModule,
	],
	controllers: [ AppController ],
	providers: [],
})
export class AppModule {
}

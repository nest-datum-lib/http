import { ServeStaticModule } from '@nestjs/serve-static';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { sqlConfig as utilsFormatSqlConfig } from '@nest-datum-utils/format';
import * as DataTypeHttpTcp from '@nest-datum-lib/data-type';
// import * as SsoHttpTcp from '@nest-datum-lib/sso';
// import * as WebSocketHttpTcp from '@nest-datum-lib/web-socket';
// import * as MailHttpTcp from '@nest-datum-lib/mail';
import * as FormsHttpTcp from '@nest-datum-lib/forms';
import * as DictionaryHttpTcp from '@nest-datum-lib/dictionary';
import * as CountriesHttpTcp from '@nest-datum-lib/countries';
import * as JobsHttpTcp from '@nest-datum-lib/jobs';
import * as CvHttpTcp from '@nest-datum-lib/cv';
// import * as LensaHttpTcp from '@nest-datum-lib/lensa';
import { AppController } from './app.controller';
import { Http as Modules } from './index';

@Module({
	imports: [
		TypeOrmModule.forRoot(utilsFormatSqlConfig()),
		RedisModule.forRoot({
			config: [{
				namespace: 'Transport',
				host: process.env.REDIS_TRANSPORT_HOST,
				port: Number(process.env.REDIS_TRANSPORT_PORT),
				password: process.env.REDIS_TRANSPORT_PASSWORD,
				db: Number(process.env.REDIS_TRANSPORT_DB),
			}, {
				namespace: 'Cache',
				host: process.env.REDIS_CACHE_HOST,
				port: Number(process.env.REDIS_CACHE_PORT),
				password: process.env.REDIS_CACHE_PASSWORD,
				db: Number(process.env.REDIS_CACHE_DB),
			}, {
				namespace: 'Queue',
				host: process.env.REDIS_QUEUE_HOST,
				port: Number(process.env.REDIS_QUEUE_PORT),
				password: process.env.REDIS_QUEUE_PASSWORD,
				db: Number(process.env.REDIS_QUEUE_DB),
			}],
		}),
		
		...Object.keys(Modules).map((key) => Modules[key]),
		
		...Object.keys(DataTypeHttpTcp).map((key) => DataTypeHttpTcp[key]),
		// ...Object.keys(SsoHttpTcp).map((key) => SsoHttpTcp[key]),
		// ...Object.keys(WebSocketHttpTcp).map((key) => WebSocketHttpTcp[key]),
		// ...Object.keys(MailHttpTcp).map((key) => MailHttpTcp[key]),
		...Object.keys(FormsHttpTcp).map((key) => FormsHttpTcp[key]),
		...Object.keys(DictionaryHttpTcp).map((key) => DictionaryHttpTcp[key]),
		...Object.keys(CountriesHttpTcp).map((key) => CountriesHttpTcp[key]),
		...Object.keys(JobsHttpTcp).map((key) => JobsHttpTcp[key]),
		...Object.keys(CvHttpTcp).map((key) => CvHttpTcp[key]),
		// ...Object.keys(LensaHttpTcp).map((key) => LensaHttpTcp[key]),
	],
	controllers: [ AppController ],
	providers: [],
})
export class AppModule {
}

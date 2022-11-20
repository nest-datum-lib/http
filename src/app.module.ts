import { RedisModule } from '@liaoliaots/nestjs-redis';
import { 
	Module,
	NestModule,
	MiddlewareConsumer, 
	RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	RegistryService,
	LogsService, 
	CacheService,
} from '@nest-datum/services';
import { typeormConfig } from 'config/typeorm';
import { redisConfig } from 'config/redis';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SettingModule as ApiSettingModule } from './api/setting/setting.module';
import { RegistryModule as RegistryRegistryModule } from './proxy/registry/registry.module';
import { SettingModule as RegistrySettingModule } from './proxy/registry/setting.module';
import { ErrModule as LogsErrModule } from './proxy/logs/err.module';
import { WarningModule as LogsWarningModule } from './proxy/logs/warning.module';
import { NotificationModule as LogsNotificationModule } from './proxy/logs/notification.module';
import { TrafficModule as LogsTrafficModule } from './proxy/logs/traffic.module';
import { SettingModule as LogsSettingModule } from './proxy/logs/setting.module';
import { TypeModule as DataTypeModule } from './proxy/data-type/type.module';
import { TypeOptionModule as DataTypeOptionModule } from './proxy/data-type/type-option.module';
import { TypeStatusModule as DataTypeStatusModule } from './proxy/data-type/type-status.module';
import { SettingModule as DataTypeSettingModule } from './proxy/data-type/setting.module';
import { LetterModule as MailLetterModule } from './proxy/mail/letter.module';
import { LetterOptionModule as MailLetterOptionModule } from './proxy/mail/letter-option.module';
import { LetterStatusModule as MailLetterStatusModule } from './proxy/mail/letter-status.module';
import { ReportModule as MailReportModule } from './proxy/mail/report.module';
import { ReportStatusModule as MailReportStatusModule } from './proxy/mail/report-status.module';
import { TemplateModule as MailTemplateModule } from './proxy/mail/template.module';
import { TemplateOptionModule as MailTemplateOptionModule } from './proxy/mail/template-option.module';
import { TemplateStatusModule as MailTemplateStatusModule } from './proxy/mail/template-status.module';
import { SettingModule as MailSettingModule } from './proxy/mail/setting.module';
import { AccessModule as SsoAccessModule } from './proxy/sso/access.module';
import { AccessOptionModule as SsoAccessOptionModule } from './proxy/sso/access-option.module';
import { AccessStatusModule as SsoAccessStatusModule } from './proxy/sso/access-status.module';
import { RoleModule as SsoRoleModule } from './proxy/sso/role.module';
import { RoleOptionModule as SsoRoleOptionModule } from './proxy/sso/role-option.module';
import { RoleStatusModule as SsoRoleStatusModule } from './proxy/sso/role-status.module';
import { UserModule as SsoUserModule } from './proxy/sso/user.module';
import { UserOptionModule as SsoUserOptionModule } from './proxy/sso/user-option.module';
import { UserStatusModule as SsoUserStatusModule } from './proxy/sso/user-status.module';
import { SettingModule as SsoSettingModule } from './proxy/sso/setting.module';
import { TrafficMiddleware } from './traffic.middleware';

@Module({
	imports: [
		TypeOrmModule.forRoot(typeormConfig),
		RedisModule.forRoot(redisConfig),
		ApiSettingModule,
		
		// registry
		RegistrySettingModule,
		RegistryRegistryModule,
		
		// logs
		LogsErrModule,
		LogsWarningModule,
		LogsNotificationModule,
		LogsTrafficModule,
		LogsSettingModule,
		
		// dataType
		DataTypeModule,
		DataTypeOptionModule,
		DataTypeStatusModule,
		DataTypeSettingModule,
		
		// mail
		MailLetterModule,
		MailLetterOptionModule,
		MailLetterStatusModule,
		MailReportModule,
		MailReportStatusModule,
		MailTemplateModule,
		MailTemplateOptionModule,
		MailTemplateStatusModule,
		MailSettingModule,

		// sso
		SsoAccessModule,
		SsoAccessOptionModule,
		SsoAccessStatusModule,
		SsoRoleModule,
		SsoRoleOptionModule,
		SsoRoleStatusModule,
		SsoUserModule,
		SsoUserOptionModule,
		SsoUserStatusModule,
		SsoSettingModule,
	],
	controllers: [ AppController ],
	providers: [ 
		RegistryService,
		LogsService,
		CacheService,
		AppService, 
	],
})
export class AppModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
			.apply(
				TrafficMiddleware,
			)
			.forRoutes({
				path: `*`,
				method: RequestMethod.ALL,
			});
	}
}

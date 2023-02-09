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

import { SettingModule as ApiSsoSettingModule } from './api/sso/setting.module';
import { AccessModule as ApiSsoAccessModule } from './api/sso/access.module';
import { AccessStatusModule as ApiSsoAccessStatusModule } from './api/sso/access-status.module';
import { AccessOptionModule as ApiSsoAccessOptionModule } from './api/sso/access-option.module';
import { AccessAccessOptionModule as ApiSsoAccessAccessOptionModule } from './api/sso/access-access-option.module';
import { RoleModule as ApiSsoRoleModule } from './api/sso/role.module';
import { RoleStatusModule as ApiSsoRoleStatusModule } from './api/sso/role-status.module';
import { RoleOptionModule as ApiSsoRoleOptionModule } from './api/sso/role-option.module';
import { RoleRoleOptionModule as ApiSsoRoleRoleOptionModule } from './api/sso/role-role-option.module';
import { RoleAccessModule as ApiSsoRoleAccessModule } from './api/sso/role-access.module';
import { UserModule as ApiSsoUserModule } from './api/sso/user.module';
import { UserStatusModule as ApiSsoUserStatusModule } from './api/sso/user-status.module';
import { UserOptionModule as ApiSsoUserOptionModule } from './api/sso/user-option.module';

import { SettingModule as ApiDataTypeSettingModule } from './api/data-type/setting.module';
import { TypeModule as ApiDataTypeTypeModule } from './api/data-type/type.module';
import { TypeStatusModule as ApiDataTypeTypeStatusModule } from './api/data-type/type-status.module';
import { TypeOptionModule as ApiDataTypeTypeOptionModule } from './api/data-type/type-option.module';
import { TypeTypeOptionModule as ApiDataTypeTypeTypeOptionModule } from './api/data-type/type-type-option.module';

import { SettingModule as ApiMailSettingModule } from './api/mail/setting.module';
import { LetterModule as ApiMailLetterModule } from './api/mail/letter.module';
import { LetterOptionModule as ApiMailLetterOptionModule } from './api/mail/letter-option.module';
import { LetterLetterOptionModule as ApiMailLetterLetterOptionModule } from './api/mail/letter-letter-option.module';
import { LetterStatusModule as ApiMailLetterStatusModule } from './api/mail/letter-status.module';
import { TemplateModule as ApiMailTemplateModule } from './api/mail/template.module';
import { TemplateOptionModule as ApiMailTemplateOptionModule } from './api/mail/template-option.module';
import { TemplateTemplateOptionModule as ApiMailTemplateTemplateOptionModule } from './api/mail/template-template-option.module';
import { TemplateStatusModule as ApiMailTemplateStatusModule } from './api/mail/template-status.module';
import { ReportModule as ApiMailReportModule } from './api/mail/report.module';
import { ReportStatusModule as ApiMailReportStatusModule } from './api/mail/report-status.module';

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

		ApiSsoSettingModule,
		ApiSsoAccessStatusModule,
		ApiSsoAccessOptionModule,
		ApiSsoAccessAccessOptionModule,
		ApiSsoAccessModule,
		ApiSsoRoleStatusModule,
		ApiSsoRoleOptionModule,
		ApiSsoRoleRoleOptionModule,
		ApiSsoRoleModule,
		ApiSsoRoleAccessModule,
		ApiSsoUserStatusModule,
		ApiSsoUserOptionModule,
		ApiSsoUserModule,
		
		ApiDataTypeSettingModule,
		ApiDataTypeTypeStatusModule,
		ApiDataTypeTypeOptionModule,
		ApiDataTypeTypeTypeOptionModule,
		ApiDataTypeTypeModule,

		ApiMailSettingModule,
		ApiMailLetterStatusModule,
		ApiMailLetterOptionModule,
		ApiMailLetterLetterOptionModule,
		ApiMailLetterModule,
		ApiMailReportModule,
		ApiMailReportStatusModule,
		ApiMailTemplateStatusModule,
		ApiMailTemplateOptionModule,
		ApiMailTemplateTemplateOptionModule,
		ApiMailTemplateModule,
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

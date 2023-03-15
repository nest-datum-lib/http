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

import { HttpTcp as DataTypeModules } from '@nest-datum-lib/data-type';

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

import { FieldModule as ApiFormsFieldModule } from './api/forms/field.module';
import { FieldOptionModule as ApiFormsFieldOptionModule } from './api/forms/field-option.module';
import { FieldStatusModule as ApiFormsFieldStatusModule } from './api/forms/field-status.module';
import { FormModule as ApiFormsFormModule } from './api/forms/form.module';
import { FormFieldModule as ApiFormsFormFieldModule } from './api/forms/form-field.module';
import { FormOptionModule as ApiFormsFormOptionModule } from './api/forms/form-option.module';
import { FormStatusModule as ApiFormsFormStatusModule } from './api/forms/form-status.module';
import { ContentStatusModule as ApiFormsContentStatusModule } from './api/forms/content-status.module';
import { ContentModule as ApiFormsContentModule } from './api/forms/content.module';
import { FieldContentModule as ApiFormsFieldContentModule } from './api/forms/field-content.module';
import { SettingModule as ApiFormsSettingModule } from './api/forms/setting.module';

import { ReportModule as CvReportModule } from './api/cv/report.module';
import { ReportStatusModule as CvReportStatusModule } from './api/cv/report-status.module';
import { SettingModule as CvSettingModule } from './api/cv/setting.module';

import { ReportModule as LensaReportModule } from './api/lensa/report.module';
import { ReportStatusModule as LensaReportStatusModule } from './api/lensa/report-status.module';
import { SettingModule as LensaSettingModule } from './api/lensa/setting.module';

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
		
		...Object.keys(DataTypeModules).map((key) => DataTypeModules[key]),

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

		ApiFormsFormFieldModule,
		ApiFormsFieldContentModule,
		ApiFormsFieldModule,
		ApiFormsFieldOptionModule,
		ApiFormsFieldStatusModule,
		ApiFormsFormModule,
		ApiFormsFormOptionModule,
		ApiFormsFormStatusModule,
		ApiFormsContentStatusModule,
		ApiFormsContentModule,
		ApiFormsSettingModule,

		CvSettingModule,
		CvReportStatusModule,
		CvReportModule,

		LensaSettingModule,
		LensaReportStatusModule,
		LensaReportModule,
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

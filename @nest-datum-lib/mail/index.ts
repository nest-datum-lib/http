import { 
	SettingHttpModule as MailSettingHttpModule,
	SettingHttpTcpModule as MailSettingHttpTcpModule,
	SettingTcpModule as MailSettingTcpModule, 
} from './src/api/setting';
import { 
	AccessAccessOptionHttpModule as MailAccessAccessOptionHttpModule,
	AccessAccessOptionHttpTcpModule as MailAccessAccessOptionHttpTcpModule, 
	AccessAccessOptionTcpModule as MailAccessAccessOptionTcpModule, 
} from './src/api/access-access-option';
import { 
	AccessOptionHttpModule as MailAccessOptionHttpModule,
	AccessOptionHttpTcpModule as MailAccessOptionHttpTcpModule, 
	AccessOptionTcpModule as MailAccessOptionTcpModule, 
} from './src/api/access-option';
import { 
	AccessStatusHttpModule as MailAccessStatusHttpModule,
	AccessStatusHttpTcpModule as MailAccessStatusHttpTcpModule,
	AccessStatusTcpModule as MailAccessStatusTcpModule, 
} from './src/api/access-status';
import { 
	AccessHttpModule as MailAccessHttpModule,
	AccessHttpTcpModule as MailAccessHttpTcpModule,
	AccessTcpModule as MailAccessTcpModule, 
} from './src/api/access';
import { 
	RoleAccessHttpModule as MailRoleAccessHttpModule,
	RoleAccessHttpTcpModule as MailRoleAccessHttpTcpModule, 
	RoleAccessTcpModule as MailRoleAccessTcpModule, 
} from './src/api/role-access';
import { 
	TemplateTemplateOptionHttpModule as MailTemplateTemplateOptionHttpModule,
	TemplateTemplateOptionHttpTcpModule as MailTemplateTemplateOptionHttpTcpModule, 
	TemplateTemplateOptionTcpModule as MailTemplateTemplateOptionTcpModule, 
} from './src/api/template-template-option';
import { 
	TemplateOptionHttpModule as MailTemplateOptionHttpModule,
	TemplateOptionHttpTcpModule as MailTemplateOptionHttpTcpModule, 
	TemplateOptionTcpModule as MailTemplateOptionTcpModule, 
} from './src/api/template-option';
import { 
	TemplateStatusHttpModule as MailTemplateStatusHttpModule,
	TemplateStatusHttpTcpModule as MailTemplateStatusHttpTcpModule,
	TemplateStatusTcpModule as MailTemplateStatusTcpModule, 
} from './src/api/template-status';
import { 
	TemplateHttpModule as MailTemplateHttpModule,
	TemplateHttpTcpModule as MailTemplateHttpTcpModule,
	TemplateTcpModule as MailTemplateTcpModule, 
} from './src/api/template';
import { 
	LetterLetterOptionHttpModule as MailLetterLetterOptionHttpModule,
	LetterLetterOptionHttpTcpModule as MailLetterLetterOptionHttpTcpModule, 
	LetterLetterOptionTcpModule as MailLetterLetterOptionTcpModule, 
} from './src/api/letter-letter-option';
import { 
	LetterOptionHttpModule as MailLetterOptionHttpModule,
	LetterOptionHttpTcpModule as MailLetterOptionHttpTcpModule, 
	LetterOptionTcpModule as MailLetterOptionTcpModule, 
} from './src/api/letter-option';
import { 
	LetterStatusHttpModule as MailLetterStatusHttpModule,
	LetterStatusHttpTcpModule as MailLetterStatusHttpTcpModule,
	LetterStatusTcpModule as MailLetterStatusTcpModule, 
} from './src/api/letter-status';
import { 
	LetterHttpModule as MailLetterHttpModule,
	LetterHttpTcpModule as MailLetterHttpTcpModule,
	LetterTcpModule as MailLetterTcpModule, 
} from './src/api/letter';
import { 
	ReportStatusHttpModule as MailReportStatusHttpModule,
	ReportStatusHttpTcpModule as MailReportStatusHttpTcpModule,
	ReportStatusTcpModule as MailReportStatusTcpModule, 
} from './src/api/report-status';
import { 
	ReportHttpModule as MailReportHttpModule,
	ReportHttpTcpModule as MailReportHttpTcpModule,
	ReportTcpModule as MailReportTcpModule, 
} from './src/api/report';

const Http = {
	MailAccessAccessOptionHttpModule,
	MailAccessOptionHttpModule,
	MailAccessStatusHttpModule,
	MailAccessHttpModule,
	MailRoleAccessHttpModule,
	MailSettingHttpModule,
	MailTemplateTemplateOptionHttpModule,
	MailTemplateOptionHttpModule,
	MailTemplateStatusHttpModule,
	MailTemplateHttpModule,
	MailLetterLetterOptionHttpModule,
	MailLetterOptionHttpModule,
	MailLetterStatusHttpModule,
	MailLetterHttpModule,
	MailReportStatusHttpModule,
	MailReportHttpModule,
};
const HttpTcp = {
	MailAccessAccessOptionHttpTcpModule,
	MailAccessOptionHttpTcpModule,
	MailAccessStatusHttpTcpModule,
	MailAccessHttpTcpModule,
	MailRoleAccessHttpTcpModule,
	MailSettingHttpTcpModule,
	MailTemplateTemplateOptionHttpTcpModule,
	MailTemplateOptionHttpTcpModule,
	MailTemplateStatusHttpTcpModule,
	MailTemplateHttpTcpModule,
	MailLetterLetterOptionHttpTcpModule,
	MailLetterOptionHttpTcpModule,
	MailLetterStatusHttpTcpModule,
	MailLetterHttpTcpModule,
	MailReportStatusHttpTcpModule,
	MailReportHttpTcpModule,
};
const Tcp = {
	MailAccessAccessOptionTcpModule,
	MailAccessOptionTcpModule,
	MailAccessStatusTcpModule,
	MailAccessTcpModule,
	MailRoleAccessTcpModule,
	MailSettingTcpModule,
	MailTemplateTemplateOptionTcpModule,
	MailTemplateOptionTcpModule,
	MailTemplateStatusTcpModule,
	MailTemplateTcpModule,
	MailLetterLetterOptionTcpModule,
	MailLetterOptionTcpModule,
	MailLetterStatusTcpModule,
	MailLetterTcpModule,
	MailReportTcpModule,
	MailReportStatusTcpModule,
};

export {
	Http,
	HttpTcp,
	Tcp,
	MailAccessAccessOptionTcpModule,
	MailAccessAccessOptionHttpModule,
	MailAccessAccessOptionHttpTcpModule,
	MailAccessOptionTcpModule,
	MailAccessOptionHttpModule,
	MailAccessOptionHttpTcpModule,
	MailAccessStatusTcpModule,
	MailAccessStatusHttpModule,
	MailAccessStatusHttpTcpModule,
	MailAccessHttpModule,
	MailAccessHttpTcpModule,
	MailAccessTcpModule,
	MailRoleAccessTcpModule,
	MailRoleAccessHttpModule,
	MailRoleAccessHttpTcpModule,
	MailSettingHttpModule,
	MailSettingHttpTcpModule,
	MailSettingTcpModule,
	MailTemplateTemplateOptionTcpModule,
	MailTemplateOptionTcpModule,
	MailTemplateStatusTcpModule,
	MailTemplateTcpModule,
	MailLetterOptionTcpModule,
	MailTemplateTemplateOptionHttpTcpModule,
	MailTemplateOptionHttpTcpModule,
	MailTemplateStatusHttpTcpModule,
	MailTemplateHttpTcpModule,
	MailLetterOptionHttpTcpModule,
	MailReportStatusHttpTcpModule,
	MailTemplateTemplateOptionHttpModule,
	MailTemplateOptionHttpModule,
	MailTemplateStatusHttpModule,
	MailTemplateHttpModule,
	MailLetterOptionHttpModule,
	MailReportStatusHttpModule,
	MailReportHttpModule,
	MailReportHttpTcpModule,
	MailReportTcpModule,
	MailReportStatusTcpModule,
};

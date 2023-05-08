import { 
	SettingHttpModule as CvSettingHttpModule,
	SettingHttpTcpModule as CvSettingHttpTcpModule,
	SettingTcpModule as CvSettingTcpModule, 
} from './src/api/setting';
import { 
	AccessAccessOptionHttpModule as CvAccessAccessOptionHttpModule,
	AccessAccessOptionHttpTcpModule as CvAccessAccessOptionHttpTcpModule, 
	AccessAccessOptionTcpModule as CvAccessAccessOptionTcpModule, 
} from './src/api/access-access-option';
import { 
	AccessOptionHttpModule as CvAccessOptionHttpModule,
	AccessOptionHttpTcpModule as CvAccessOptionHttpTcpModule, 
	AccessOptionTcpModule as CvAccessOptionTcpModule, 
} from './src/api/access-option';
import { 
	AccessStatusHttpModule as CvAccessStatusHttpModule,
	AccessStatusHttpTcpModule as CvAccessStatusHttpTcpModule,
	AccessStatusTcpModule as CvAccessStatusTcpModule, 
} from './src/api/access-status';
import { 
	AccessHttpModule as CvAccessHttpModule,
	AccessHttpTcpModule as CvAccessHttpTcpModule,
	AccessTcpModule as CvAccessTcpModule, 
} from './src/api/access';
import { 
	RoleAccessHttpModule as CvRoleAccessHttpModule,
	RoleAccessHttpTcpModule as CvRoleAccessHttpTcpModule, 
	RoleAccessTcpModule as CvRoleAccessTcpModule, 
} from './src/api/role-access';
import { 
	ReportStatusHttpModule as CvReportStatusHttpModule,
	ReportStatusHttpTcpModule as CvReportStatusHttpTcpModule,
	ReportStatusTcpModule as CvReportStatusTcpModule, 
} from './src/api/report-status';
import { 
	ReportHttpModule as CvReportHttpModule,
	ReportHttpTcpModule as CvReportHttpTcpModule,
	ReportTcpModule as CvReportTcpModule, 
} from './src/api/report';

const Http = {
	CvAccessAccessOptionHttpModule,
	CvAccessOptionHttpModule,
	CvAccessStatusHttpModule,
	CvAccessHttpModule,
	CvRoleAccessHttpModule,
	CvSettingHttpModule,
	CvReportStatusHttpModule,
	CvReportHttpModule,
};
const HttpTcp = {
	CvAccessAccessOptionHttpTcpModule,
	CvAccessOptionHttpTcpModule,
	CvAccessStatusHttpTcpModule,
	CvAccessHttpTcpModule,
	CvRoleAccessHttpTcpModule,
	CvSettingHttpTcpModule,
	CvReportStatusHttpTcpModule,
	CvReportHttpTcpModule,
};
const Tcp = {
	CvAccessAccessOptionTcpModule,
	CvAccessOptionTcpModule,
	CvAccessStatusTcpModule,
	CvAccessTcpModule,
	CvRoleAccessTcpModule,
	CvSettingTcpModule,
	CvReportStatusTcpModule,
	CvReportTcpModule,
};

export {
	Http,
	HttpTcp,
	Tcp,
	CvAccessAccessOptionTcpModule,
	CvAccessAccessOptionHttpModule,
	CvAccessAccessOptionHttpTcpModule,
	CvAccessOptionTcpModule,
	CvAccessOptionHttpModule,
	CvAccessOptionHttpTcpModule,
	CvAccessStatusTcpModule,
	CvAccessStatusHttpModule,
	CvAccessStatusHttpTcpModule,
	CvAccessHttpModule,
	CvAccessHttpTcpModule,
	CvAccessTcpModule,
	CvRoleAccessTcpModule,
	CvRoleAccessHttpModule,
	CvRoleAccessHttpTcpModule,
	CvSettingHttpModule,
	CvSettingHttpTcpModule,
	CvSettingTcpModule,
	CvReportStatusHttpModule,
	CvReportHttpModule,
	CvReportStatusHttpTcpModule,
	CvReportHttpTcpModule,
	CvReportStatusTcpModule,
	CvReportTcpModule,
};

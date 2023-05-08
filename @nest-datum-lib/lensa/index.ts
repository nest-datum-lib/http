import { 
	SettingHttpModule as LensaSettingHttpModule,
	SettingHttpTcpModule as LensaSettingHttpTcpModule,
	SettingTcpModule as LensaSettingTcpModule, 
} from './src/api/setting';
import { 
	AccessAccessOptionHttpModule as LensaAccessAccessOptionHttpModule,
	AccessAccessOptionHttpTcpModule as LensaAccessAccessOptionHttpTcpModule, 
	AccessAccessOptionTcpModule as LensaAccessAccessOptionTcpModule, 
} from './src/api/access-access-option';
import { 
	AccessOptionHttpModule as LensaAccessOptionHttpModule,
	AccessOptionHttpTcpModule as LensaAccessOptionHttpTcpModule, 
	AccessOptionTcpModule as LensaAccessOptionTcpModule, 
} from './src/api/access-option';
import { 
	AccessStatusHttpModule as LensaAccessStatusHttpModule,
	AccessStatusHttpTcpModule as LensaAccessStatusHttpTcpModule,
	AccessStatusTcpModule as LensaAccessStatusTcpModule, 
} from './src/api/access-status';
import { 
	AccessHttpModule as LensaAccessHttpModule,
	AccessHttpTcpModule as LensaAccessHttpTcpModule,
	AccessTcpModule as LensaAccessTcpModule, 
} from './src/api/access';
import { 
	RoleAccessHttpModule as LensaRoleAccessHttpModule,
	RoleAccessHttpTcpModule as LensaRoleAccessHttpTcpModule, 
	RoleAccessTcpModule as LensaRoleAccessTcpModule, 
} from './src/api/role-access';
import { 
	ReportHttpModule as LensaReportHttpModule,
	ReportHttpTcpModule as LensaReportHttpTcpModule,
	ReportTcpModule as LensaReportTcpModule, 
} from './src/api/report';

const Http = {
	LensaAccessAccessOptionHttpModule,
	LensaAccessOptionHttpModule,
	LensaAccessStatusHttpModule,
	LensaAccessHttpModule,
	LensaRoleAccessHttpModule,
	LensaSettingHttpModule,
	LensaReportStatusHttpModule,
	LensaReportHttpModule,
};
const HttpTcp = {
	LensaAccessAccessOptionHttpTcpModule,
	LensaAccessOptionHttpTcpModule,
	LensaAccessStatusHttpTcpModule,
	LensaAccessHttpTcpModule,
	LensaRoleAccessHttpTcpModule,
	LensaSettingHttpTcpModule,
	LensaReportStatusHttpTcpModule,
	LensaReportHttpTcpModule,
};
const Tcp = {
	LensaAccessAccessOptionTcpModule,
	LensaAccessOptionTcpModule,
	LensaAccessStatusTcpModule,
	LensaAccessTcpModule,
	LensaRoleAccessTcpModule,
	LensaSettingTcpModule,
	LensaReportStatusTcpModule,
	LensaReportTcpModule,
};

export {
	Http,
	HttpTcp,
	Tcp,
	LensaAccessAccessOptionTcpModule,
	LensaAccessAccessOptionHttpModule,
	LensaAccessAccessOptionHttpTcpModule,
	LensaAccessOptionTcpModule,
	LensaAccessOptionHttpModule,
	LensaAccessOptionHttpTcpModule,
	LensaAccessStatusTcpModule,
	LensaAccessStatusHttpModule,
	LensaAccessStatusHttpTcpModule,
	LensaAccessHttpModule,
	LensaAccessHttpTcpModule,
	LensaAccessTcpModule,
	LensaRoleAccessTcpModule,
	LensaRoleAccessHttpModule,
	LensaRoleAccessHttpTcpModule,
	LensaSettingHttpModule,
	LensaSettingHttpTcpModule,
	LensaSettingTcpModule,
	LensaReportStatusHttpModule,
	LensaReportHttpModule,
	LensaReportStatusHttpTcpModule,
	LensaReportHttpTcpModule,
	LensaReportStatusTcpModule,
	LensaReportTcpModule,
};

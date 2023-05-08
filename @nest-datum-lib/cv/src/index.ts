import { 
	SettingHttpModule,
	SettingHttpTcpModule,
	SettingTcpModule, 
} from './api/setting';
import { 
	AccessAccessOptionHttpModule,
	AccessAccessOptionHttpTcpModule, 
	AccessAccessOptionTcpModule, 
} from './api/access-access-option';
import { 
	AccessOptionHttpModule,
	AccessOptionHttpTcpModule, 
	AccessOptionTcpModule, 
} from './api/access-option';
import { 
	AccessStatusHttpModule,
	AccessStatusHttpTcpModule,
	AccessStatusTcpModule, 
} from './api/access-status';
import { 
	AccessHttpModule,
	AccessHttpTcpModule,
	AccessTcpModule, 
} from './api/access';
import { 
	RoleAccessHttpModule,
	RoleAccessHttpTcpModule, 
	RoleAccessTcpModule, 
} from './api/role-access';
import { 
	ReportStatusHttpModule,
	ReportStatusHttpTcpModule,
	ReportStatusTcpModule, 
} from './api/report-status';
import { 
	ReportHttpModule,
	ReportHttpTcpModule,
	ReportTcpModule, 
} from './api/report';

const Http = {
	AccessAccessOptionHttpModule,
	AccessOptionHttpModule,
	AccessStatusHttpModule,
	AccessHttpModule,
	RoleAccessHttpModule,
	SettingHttpModule,
	ReportStatusHttpModule,
	ReportHttpModule,
};
const HttpTcp = {
	AccessAccessOptionHttpTcpModule,
	AccessOptionHttpTcpModule,
	AccessStatusHttpTcpModule,
	AccessHttpTcpModule,
	RoleAccessHttpTcpModule,
	SettingHttpTcpModule,
	ReportStatusHttpTcpModule,
	ReportHttpTcpModule,
};
const Tcp = {
	AccessAccessOptionTcpModule,
	AccessOptionTcpModule,
	AccessStatusTcpModule,
	AccessTcpModule,
	RoleAccessTcpModule,
	SettingTcpModule,
	ReportStatusTcpModule,
	ReportTcpModule,
};

export {
	Http,
	HttpTcp,
	Tcp,
	AccessAccessOptionTcpModule,
	AccessAccessOptionHttpModule,
	AccessAccessOptionHttpTcpModule,
	AccessOptionTcpModule,
	AccessOptionHttpModule,
	AccessOptionHttpTcpModule,
	AccessStatusTcpModule,
	AccessStatusHttpModule,
	AccessStatusHttpTcpModule,
	AccessHttpModule,
	AccessHttpTcpModule,
	AccessTcpModule,
	RoleAccessTcpModule,
	RoleAccessHttpModule,
	RoleAccessHttpTcpModule,
	SettingHttpModule,
	SettingHttpTcpModule,
	SettingTcpModule,
	ReportStatusHttpModule,
	ReportHttpModule,
	ReportStatusHttpTcpModule,
	ReportHttpTcpModule,
	ReportStatusTcpModule,
	ReportTcpModule,
};

import { SettingHttpTcpModule } from './api/setting';
import { AccessAccessOptionHttpTcpModule } from './api/access-access-option';
import { AccessOptionHttpTcpModule as CvAccessOptionHttpTcpModule } from './api/access-option';
import { AccessStatusHttpTcpModule as CvAccessStatusHttpTcpModule } from './api/access-status';
import { AccessHttpTcpModule as CvAccessHttpTcpModule } from './api/access';
import { RoleAccessHttpTcpModule as CvRoleAccessHttpTcpModule } from './api/role-access';
import { ReportStatusHttpTcpModule as CvReportStatusHttpTcpModule } from './api/report-status';
import { ReportHttpTcpModule as CvReportHttpTcpModule } from './api/report';

export {
	CvAccessAccessOptionHttpTcpModule,
	CvAccessOptionHttpTcpModule,
	CvAccessStatusHttpTcpModule,
	CvAccessHttpTcpModule,
	CvRoleAccessHttpTcpModule,
	CvSettingHttpTcpModule,
	CvReportHttpTcpModule,
	CvReportStatusHttpTcpModule,
};

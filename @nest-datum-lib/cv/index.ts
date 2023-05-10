import { SettingHttpTcpModule } from './src/api/setting';
import { AccessAccessOptionHttpTcpModule } from './src/api/access-access-option';
import { AccessOptionHttpTcpModule as CvAccessOptionHttpTcpModule } from './src/api/access-option';
import { AccessStatusHttpTcpModule as CvAccessStatusHttpTcpModule } from './src/api/access-status';
import { AccessHttpTcpModule as CvAccessHttpTcpModule } from './src/api/access';
import { RoleAccessHttpTcpModule as CvRoleAccessHttpTcpModule } from './src/api/role-access';
import { ReportStatusHttpTcpModule as CvReportStatusHttpTcpModule } from './src/api/report-status';
import { ReportHttpTcpModule as CvReportHttpTcpModule } from './src/api/report';

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

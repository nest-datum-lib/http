import { 
	SettingHttpModule as WebSocketSettingHttpModule,
	SettingHttpTcpModule as WebSocketSettingHttpTcpModule,
	SettingTcpModule as WebSocketSettingTcpModule, 
} from './src/api/setting';
import { 
	AccessAccessOptionHttpModule as WebSocketAccessAccessOptionHttpModule,
	AccessAccessOptionHttpTcpModule as WebSocketAccessAccessOptionHttpTcpModule, 
	AccessAccessOptionTcpModule as WebSocketAccessAccessOptionTcpModule, 
} from './src/api/access-access-option';
import { 
	AccessOptionHttpModule as WebSocketAccessOptionHttpModule,
	AccessOptionHttpTcpModule as WebSocketAccessOptionHttpTcpModule, 
	AccessOptionTcpModule as WebSocketAccessOptionTcpModule, 
} from './src/api/access-option';
import { 
	AccessStatusHttpModule as WebSocketAccessStatusHttpModule,
	AccessStatusHttpTcpModule as WebSocketAccessStatusHttpTcpModule,
	AccessStatusTcpModule as WebSocketAccessStatusTcpModule, 
} from './src/api/access-status';
import { 
	AccessHttpModule as WebSocketAccessHttpModule,
	AccessHttpTcpModule as WebSocketAccessHttpTcpModule,
	AccessTcpModule as WebSocketAccessTcpModule, 
} from './src/api/access';
import { 
	RoleAccessHttpModule as WebSocketRoleAccessHttpModule,
	RoleAccessHttpTcpModule as WebSocketRoleAccessHttpTcpModule, 
	RoleAccessTcpModule as WebSocketRoleAccessTcpModule, 
} from './src/api/role-access';

const Http = {
	WebSocketAccessAccessOptionHttpModule,
	WebSocketAccessOptionHttpModule,
	WebSocketAccessStatusHttpModule,
	WebSocketAccessHttpModule,
	WebSocketRoleAccessHttpModule,
	WebSocketSettingHttpModule,
};
const HttpTcp = {
	WebSocketAccessAccessOptionHttpTcpModule,
	WebSocketAccessOptionHttpTcpModule,
	WebSocketAccessStatusHttpTcpModule,
	WebSocketAccessHttpTcpModule,
	WebSocketRoleAccessHttpTcpModule,
	WebSocketSettingHttpTcpModule,
};
const Tcp = {
	WebSocketAccessAccessOptionTcpModule,
	WebSocketAccessOptionTcpModule,
	WebSocketAccessStatusTcpModule,
	WebSocketAccessTcpModule,
	WebSocketRoleAccessTcpModule,
	WebSocketSettingTcpModule,
};

export {
	Http,
	HttpTcp,
	Tcp,
	WebSocketAccessAccessOptionTcpModule,
	WebSocketAccessAccessOptionHttpModule,
	WebSocketAccessAccessOptionHttpTcpModule,
	WebSocketAccessOptionTcpModule,
	WebSocketAccessOptionHttpModule,
	WebSocketAccessOptionHttpTcpModule,
	WebSocketAccessStatusTcpModule,
	WebSocketAccessStatusHttpModule,
	WebSocketAccessStatusHttpTcpModule,
	WebSocketAccessHttpModule,
	WebSocketAccessHttpTcpModule,
	WebSocketAccessTcpModule,
	WebSocketRoleAccessTcpModule,
	WebSocketRoleAccessHttpModule,
	WebSocketRoleAccessHttpTcpModule,
	WebSocketSettingHttpModule,
	WebSocketSettingHttpTcpModule,
	WebSocketSettingTcpModule,
};

import { 
	SettingHttpModule as SsoSettingHttpModule,
	SettingHttpTcpModule as SsoSettingHttpTcpModule,
	SettingTcpModule as SsoSettingTcpModule, 
} from './src/api/setting';
import { 
	AccessAccessOptionHttpModule as SsoAccessAccessOptionHttpModule,
	AccessAccessOptionHttpTcpModule as SsoAccessAccessOptionHttpTcpModule, 
	AccessAccessOptionTcpModule as SsoAccessAccessOptionTcpModule, 
} from './src/api/access-access-option';
import { 
	AccessOptionHttpModule as SsoAccessOptionHttpModule,
	AccessOptionHttpTcpModule as SsoAccessOptionHttpTcpModule, 
	AccessOptionTcpModule as SsoAccessOptionTcpModule, 
} from './src/api/access-option';
import { 
	AccessStatusHttpModule as SsoAccessStatusHttpModule,
	AccessStatusHttpTcpModule as SsoAccessStatusHttpTcpModule,
	AccessStatusTcpModule as SsoAccessStatusTcpModule, 
} from './src/api/access-status';
import { 
	AccessHttpModule as SsoAccessHttpModule,
	AccessHttpTcpModule as SsoAccessHttpTcpModule,
	AccessTcpModule as SsoAccessTcpModule, 
} from './src/api/access';
import { 
	RoleAccessHttpModule as SsoRoleAccessHttpModule,
	RoleAccessHttpTcpModule as SsoRoleAccessHttpTcpModule, 
	RoleAccessTcpModule as SsoRoleAccessTcpModule, 
} from './src/api/role-access';
import { 
	RoleRoleOptionHttpModule as SsoRoleRoleOptionHttpModule,
	RoleRoleOptionHttpTcpModule as SsoRoleRoleOptionHttpTcpModule,
	RoleRoleOptionTcpModule as SsoRoleRoleOptionTcpModule, 
} from './src/api/role-role-option';
import { 
	RoleOptionHttpModule as SsoRoleOptionHttpModule,
	RoleOptionHttpTcpModule as SsoRoleOptionHttpTcpModule,
	RoleOptionTcpModule as SsoRoleOptionTcpModule, 
} from './src/api/role-option';
import { 
	RoleStatusHttpModule as SsoRoleStatusHttpModule,
	RoleStatusHttpTcpModule as SsoRoleStatusHttpTcpModule,
	RoleStatusTcpModule as SsoRoleStatusTcpModule, 
} from './src/api/role-status';
import { 
	RoleHttpModule as SsoRoleHttpModule,
	RoleHttpTcpModule as SsoRoleHttpTcpModule,
	RoleTcpModule as SsoRoleTcpModule, 
} from './src/api/role';
import { 
	UserOptionHttpModule as SsoUserOptionHttpModule,
	UserOptionHttpTcpModule as SsoUserOptionHttpTcpModule,
	UserOptionTcpModule as SsoUserOptionTcpModule, 
} from './src/api/user-option';
import { 
	UserStatusHttpModule as SsoUserStatusHttpModule,
	UserStatusHttpTcpModule as SsoUserStatusHttpTcpModule,
	UserStatusTcpModule as SsoUserStatusTcpModule, 
} from './src/api/user-status';
import { 
	UserHttpModule as SsoUserHttpModule,
	UserHttpTcpModule as SsoUserHttpTcpModule,
	UserTcpModule as SsoUserTcpModule, 
} from './src/api/user';

const Http = {
	SsoAccessAccessOptionHttpModule,
	SsoAccessOptionHttpModule,
	SsoAccessStatusHttpModule,
	SsoAccessHttpModule,
	SsoRoleAccessHttpModule,
	SsoRoleRoleOptionHttpModule,
	SsoRoleOptionHttpModule,
	SsoRoleStatusHttpModule,
	SsoRoleHttpModule,
	SsoUserOptionHttpModule,
	SsoUserStatusHttpModule,
	SsoUserHttpModule,
	SsoSettingHttpModule,
};
const HttpTcp = {
	SsoAccessAccessOptionHttpTcpModule,
	SsoAccessOptionHttpTcpModule,
	SsoAccessStatusHttpTcpModule,
	SsoAccessHttpTcpModule,
	SsoRoleAccessHttpTcpModule,
	SsoRoleRoleOptionHttpTcpModule,
	SsoRoleOptionHttpTcpModule,
	SsoRoleStatusHttpTcpModule,
	SsoRoleHttpTcpModule,
	SsoUserOptionHttpTcpModule,
	SsoUserStatusHttpTcpModule,
	SsoUserHttpTcpModule,
	SsoSettingHttpTcpModule,
};
const Tcp = {
	SsoAccessAccessOptionTcpModule,
	SsoAccessOptionTcpModule,
	SsoAccessStatusTcpModule,
	SsoAccessTcpModule,
	SsoRoleAccessTcpModule,
	SsoRoleRoleOptionTcpModule,
	SsoRoleOptionTcpModule,
	SsoRoleStatusTcpModule,
	SsoRoleTcpModule,
	SsoUserOptionTcpModule,
	SsoUserStatusTcpModule,
	SsoUserTcpModule,
	SsoSettingTcpModule,
};

export {
	Http,
	HttpTcp,
	Tcp,
	SsoAccessAccessOptionTcpModule,
	SsoAccessAccessOptionHttpModule,
	SsoAccessAccessOptionHttpTcpModule,
	SsoAccessOptionTcpModule,
	SsoAccessOptionHttpModule,
	SsoAccessOptionHttpTcpModule,
	SsoAccessStatusTcpModule,
	SsoAccessStatusHttpModule,
	SsoAccessStatusHttpTcpModule,
	SsoAccessHttpModule,
	SsoAccessHttpTcpModule,
	SsoAccessTcpModule,
	SsoRoleAccessTcpModule,
	SsoRoleAccessHttpModule,
	SsoRoleAccessHttpTcpModule,
	SsoRoleRoleOptionHttpModule,
	SsoRoleRoleOptionHttpTcpModule,
	SsoRoleRoleOptionTcpModule,
	SsoRoleOptionHttpModule,
	SsoRoleOptionHttpTcpModule,
	SsoRoleOptionTcpModule,
	SsoRoleStatusHttpModule,
	SsoRoleStatusHttpTcpModule,
	SsoRoleStatusTcpModule,
	SsoRoleHttpModule,
	SsoRoleHttpTcpModule,
	SsoRoleTcpModule,
	SsoUserOptionHttpModule,
	SsoUserStatusHttpModule,
	SsoUserHttpModule,
	SsoUserOptionHttpTcpModule,
	SsoUserStatusHttpTcpModule,
	SsoUserHttpTcpModule,
	SsoUserOptionTcpModule,
	SsoUserStatusTcpModule,
	SsoUserTcpModule,
	SsoSettingHttpModule,
	SsoSettingHttpTcpModule,
	SsoSettingTcpModule,
};

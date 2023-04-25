import { 
	SettingHttpModule as DataTypeSettingHttpModule,
	SettingHttpTcpModule as DataTypeSettingHttpTcpModule,
	SettingTcpModule as DataTypeSettingTcpModule, 
} from './src/api/setting';
import { 
	AccessAccessOptionHttpModule as DataTypeAccessAccessOptionHttpModule,
	AccessAccessOptionHttpTcpModule as DataTypeAccessAccessOptionHttpTcpModule, 
	AccessAccessOptionTcpModule as DataTypeAccessAccessOptionTcpModule, 
} from './src/api/access-access-option';
import { 
	AccessOptionHttpModule as DataTypeAccessOptionHttpModule,
	AccessOptionHttpTcpModule as DataTypeAccessOptionHttpTcpModule, 
	AccessOptionTcpModule as DataTypeAccessOptionTcpModule, 
} from './src/api/access-option';
import { 
	AccessStatusHttpModule as DataTypeAccessStatusHttpModule,
	AccessStatusHttpTcpModule as DataTypeAccessStatusHttpTcpModule,
	AccessStatusTcpModule as DataTypeAccessStatusTcpModule, 
} from './src/api/access-status';
import { 
	AccessHttpModule as DataTypeAccessHttpModule,
	AccessHttpTcpModule as DataTypeAccessHttpTcpModule,
	AccessTcpModule as DataTypeAccessTcpModule, 
} from './src/api/access';
import { 
	RoleAccessHttpModule as DataTypeRoleAccessHttpModule,
	RoleAccessHttpTcpModule as DataTypeRoleAccessHttpTcpModule, 
	RoleAccessTcpModule as DataTypeRoleAccessTcpModule, 
} from './src/api/role-access';
import { 
	TypeTypeOptionHttpModule as DataTypeTypeTypeOptionHttpModule,
	TypeTypeOptionHttpTcpModule as DataTypeTypeTypeOptionHttpTcpModule,
	TypeTypeOptionTcpModule as DataTypeTypeTypeOptionTcpModule, 
} from './src/api/type-type-option';
import { 
	TypeOptionHttpModule as DataTypeTypeOptionHttpModule,
	TypeOptionHttpTcpModule as DataTypeTypeOptionHttpTcpModule,
	TypeOptionTcpModule as DataTypeTypeOptionTcpModule, 
} from './src/api/type-option';
import { 
	TypeStatusHttpModule as DataTypeTypeStatusHttpModule,
	TypeStatusHttpTcpModule as DataTypeTypeStatusHttpTcpModule,
	TypeStatusTcpModule as DataTypeTypeStatusTcpModule, 
} from './src/api/type-status';
import { 
	TypeHttpModule as DataTypeTypeHttpModule,
	TypeHttpTcpModule as DataTypeTypeHttpTcpModule,
	TypeTcpModule as DataTypeTypeTcpModule, 
} from './src/api/type';

const Http = {
	DataTypeAccessAccessOptionHttpModule,
	DataTypeAccessOptionHttpModule,
	DataTypeAccessStatusHttpModule,
	DataTypeAccessHttpModule,
	DataTypeRoleAccessHttpModule,
	DataTypeTypeTypeOptionHttpModule,
	DataTypeTypeOptionHttpModule,
	DataTypeTypeStatusHttpModule,
	DataTypeTypeHttpModule,
	DataTypeSettingHttpModule,
};
const HttpTcp = {
	DataTypeAccessAccessOptionHttpTcpModule,
	DataTypeAccessOptionHttpTcpModule,
	DataTypeAccessStatusHttpTcpModule,
	DataTypeAccessHttpTcpModule,
	DataTypeRoleAccessHttpTcpModule,
	DataTypeTypeTypeOptionHttpTcpModule,
	DataTypeTypeOptionHttpTcpModule,
	DataTypeTypeStatusHttpTcpModule,
	DataTypeTypeHttpTcpModule,
	DataTypeSettingHttpTcpModule,
};
const Tcp = {
	DataTypeAccessAccessOptionTcpModule,
	DataTypeAccessOptionTcpModule,
	DataTypeAccessStatusTcpModule,
	DataTypeAccessTcpModule,
	DataTypeRoleAccessTcpModule,
	DataTypeTypeTypeOptionTcpModule,
	DataTypeTypeOptionTcpModule,
	DataTypeTypeStatusTcpModule,
	DataTypeTypeTcpModule,
	DataTypeSettingTcpModule,
};

export {
	Http,
	HttpTcp,
	Tcp,
	DataTypeAccessAccessOptionTcpModule,
	DataTypeAccessAccessOptionHttpModule,
	DataTypeAccessAccessOptionHttpTcpModule,
	DataTypeAccessOptionTcpModule,
	DataTypeAccessOptionHttpModule,
	DataTypeAccessOptionHttpTcpModule,
	DataTypeAccessStatusTcpModule,
	DataTypeAccessStatusHttpModule,
	DataTypeAccessStatusHttpTcpModule,
	DataTypeAccessHttpModule,
	DataTypeAccessHttpTcpModule,
	DataTypeAccessTcpModule,
	DataTypeRoleAccessTcpModule,
	DataTypeRoleAccessHttpModule,
	DataTypeRoleAccessHttpTcpModule,
	DataTypeTypeTypeOptionHttpModule,
	DataTypeTypeTypeOptionHttpTcpModule,
	DataTypeTypeTypeOptionTcpModule,
	DataTypeTypeOptionHttpModule,
	DataTypeTypeOptionHttpTcpModule,
	DataTypeTypeOptionTcpModule,
	DataTypeTypeStatusHttpModule,
	DataTypeTypeStatusHttpTcpModule,
	DataTypeTypeStatusTcpModule,
	DataTypeTypeHttpModule,
	DataTypeTypeHttpTcpModule,
	DataTypeTypeTcpModule,
	DataTypeSettingHttpModule,
	DataTypeSettingHttpTcpModule,
	DataTypeSettingTcpModule,
};

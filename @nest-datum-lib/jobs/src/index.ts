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
	PostPostOptionHttpModule,
	PostPostOptionHttpTcpModule, 
	PostPostOptionTcpModule, 
} from './api/post-post-option';
import { 
	PostOptionHttpModule,
	PostOptionHttpTcpModule, 
	PostOptionTcpModule, 
} from './api/post-option';
import { 
	PostStatusHttpModule,
	PostStatusHttpTcpModule,
	PostStatusTcpModule, 
} from './api/post-status';
import { 
	PostHttpModule,
	PostHttpTcpModule,
	PostTcpModule, 
} from './api/post';

const Http = {
	AccessAccessOptionHttpModule,
	AccessOptionHttpModule,
	AccessStatusHttpModule,
	AccessHttpModule,
	RoleAccessHttpModule,
	SettingHttpModule,
	PostPostOptionHttpModule,
	PostOptionHttpModule,
	PostStatusHttpModule,
	PostHttpModule,
};
const HttpTcp = {
	AccessAccessOptionHttpTcpModule,
	AccessOptionHttpTcpModule,
	AccessStatusHttpTcpModule,
	AccessHttpTcpModule,
	RoleAccessHttpTcpModule,
	SettingHttpTcpModule,
	PostPostOptionHttpTcpModule,
	PostOptionHttpTcpModule,
	PostStatusHttpTcpModule,
	PostHttpTcpModule,
};
const Tcp = {
	AccessAccessOptionTcpModule,
	AccessOptionTcpModule,
	AccessStatusTcpModule,
	AccessTcpModule,
	RoleAccessTcpModule,
	SettingTcpModule,
	PostPostOptionTcpModule,
	PostOptionTcpModule,
	PostStatusTcpModule,
	PostTcpModule,
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
	PostPostOptionTcpModule,
	PostOptionTcpModule,
	PostStatusTcpModule,
	PostTcpModule,
	PostPostOptionHttpTcpModule,
	PostOptionHttpTcpModule,
	PostStatusHttpTcpModule,
	PostHttpTcpModule,
	PostPostOptionHttpModule,
	PostOptionHttpModule,
	PostStatusHttpModule,
	PostHttpModule,
};

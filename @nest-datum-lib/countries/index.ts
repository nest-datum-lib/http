import { 
	SettingHttpModule as CountriesSettingHttpModule,
	SettingHttpTcpModule as CountriesSettingHttpTcpModule,
	SettingTcpModule as CountriesSettingTcpModule, 
} from './src/api/setting';
import { 
	AccessAccessOptionHttpModule as CountriesAccessAccessOptionHttpModule,
	AccessAccessOptionHttpTcpModule as CountriesAccessAccessOptionHttpTcpModule, 
	AccessAccessOptionTcpModule as CountriesAccessAccessOptionTcpModule, 
} from './src/api/access-access-option';
import { 
	AccessOptionHttpModule as CountriesAccessOptionHttpModule,
	AccessOptionHttpTcpModule as CountriesAccessOptionHttpTcpModule, 
	AccessOptionTcpModule as CountriesAccessOptionTcpModule, 
} from './src/api/access-option';
import { 
	AccessStatusHttpModule as CountriesAccessStatusHttpModule,
	AccessStatusHttpTcpModule as CountriesAccessStatusHttpTcpModule,
	AccessStatusTcpModule as CountriesAccessStatusTcpModule, 
} from './src/api/access-status';
import { 
	AccessHttpModule as CountriesAccessHttpModule,
	AccessHttpTcpModule as CountriesAccessHttpTcpModule,
	AccessTcpModule as CountriesAccessTcpModule, 
} from './src/api/access';
import { 
	RoleAccessHttpModule as CountriesRoleAccessHttpModule,
	RoleAccessHttpTcpModule as CountriesRoleAccessHttpTcpModule, 
	RoleAccessTcpModule as CountriesRoleAccessTcpModule, 
} from './src/api/role-access';
import { 
	RegionRegionOptionHttpModule as CountriesRegionRegionOptionHttpModule,
	RegionRegionOptionHttpTcpModule as CountriesRegionRegionOptionHttpTcpModule, 
	RegionRegionOptionTcpModule as CountriesRegionRegionOptionTcpModule, 
} from './src/api/region-region-option';
import { 
	RegionOptionHttpModule as CountriesRegionOptionHttpModule,
	RegionOptionHttpTcpModule as CountriesRegionOptionHttpTcpModule, 
	RegionOptionTcpModule as CountriesRegionOptionTcpModule, 
} from './src/api/region-option';
import { 
	RegionStatusHttpModule as CountriesRegionStatusHttpModule,
	RegionStatusHttpTcpModule as CountriesRegionStatusHttpTcpModule,
	RegionStatusTcpModule as CountriesRegionStatusTcpModule, 
} from './src/api/region-status';
import { 
	RegionHttpModule as CountriesRegionHttpModule,
	RegionHttpTcpModule as CountriesRegionHttpTcpModule,
	RegionTcpModule as CountriesRegionTcpModule, 
} from './src/api/region';
import { 
	TypeTypeOptionHttpModule as CountriesTypeTypeOptionHttpModule,
	TypeTypeOptionHttpTcpModule as CountriesTypeTypeOptionHttpTcpModule, 
	TypeTypeOptionTcpModule as CountriesTypeTypeOptionTcpModule, 
} from './src/api/type-type-option';
import { 
	TypeOptionHttpModule as CountriesTypeOptionHttpModule,
	TypeOptionHttpTcpModule as CountriesTypeOptionHttpTcpModule, 
	TypeOptionTcpModule as CountriesTypeOptionTcpModule, 
} from './src/api/type-option';
import { 
	TypeStatusHttpModule as CountriesTypeStatusHttpModule,
	TypeStatusHttpTcpModule as CountriesTypeStatusHttpTcpModule,
	TypeStatusTcpModule as CountriesTypeStatusTcpModule, 
} from './src/api/type-status';
import { 
	TypeHttpModule as CountriesTypeHttpModule,
	TypeHttpTcpModule as CountriesTypeHttpTcpModule,
	TypeTcpModule as CountriesTypeTcpModule, 
} from './src/api/type';

const Http = {
	CountriesAccessAccessOptionHttpModule,
	CountriesAccessOptionHttpModule,
	CountriesAccessStatusHttpModule,
	CountriesAccessHttpModule,
	CountriesRoleAccessHttpModule,
	CountriesSettingHttpModule,
	CountriesRegionRegionOptionHttpModule,
	CountriesRegionOptionHttpModule,
	CountriesRegionStatusHttpModule,
	CountriesRegionHttpModule,
	CountriesTypeTypeOptionHttpModule,
	CountriesTypeOptionHttpModule,
	CountriesTypeStatusHttpModule,
	CountriesTypeHttpModule,
};
const HttpTcp = {
	CountriesAccessAccessOptionHttpTcpModule,
	CountriesAccessOptionHttpTcpModule,
	CountriesAccessStatusHttpTcpModule,
	CountriesAccessHttpTcpModule,
	CountriesRoleAccessHttpTcpModule,
	CountriesSettingHttpTcpModule,
	CountriesRegionRegionOptionHttpTcpModule,
	CountriesRegionOptionHttpTcpModule,
	CountriesRegionStatusHttpTcpModule,
	CountriesRegionHttpTcpModule,
	CountriesTypeTypeOptionHttpTcpModule,
	CountriesTypeOptionHttpTcpModule,
	CountriesTypeStatusHttpTcpModule,
	CountriesTypeHttpTcpModule,
};
const Tcp = {
	CountriesAccessAccessOptionTcpModule,
	CountriesAccessOptionTcpModule,
	CountriesAccessStatusTcpModule,
	CountriesAccessTcpModule,
	CountriesRoleAccessTcpModule,
	CountriesSettingTcpModule,
	CountriesRegionRegionOptionTcpModule,
	CountriesRegionOptionTcpModule,
	CountriesRegionStatusTcpModule,
	CountriesRegionTcpModule,
	CountriesTypeTypeOptionTcpModule,
	CountriesTypeOptionTcpModule,
	CountriesTypeStatusTcpModule,
	CountriesTypeTcpModule,
};

export {
	Http,
	HttpTcp,
	Tcp,
	CountriesAccessAccessOptionTcpModule,
	CountriesAccessAccessOptionHttpModule,
	CountriesAccessAccessOptionHttpTcpModule,
	CountriesAccessOptionTcpModule,
	CountriesAccessOptionHttpModule,
	CountriesAccessOptionHttpTcpModule,
	CountriesAccessStatusTcpModule,
	CountriesAccessStatusHttpModule,
	CountriesAccessStatusHttpTcpModule,
	CountriesAccessHttpModule,
	CountriesAccessHttpTcpModule,
	CountriesAccessTcpModule,
	CountriesRoleAccessTcpModule,
	CountriesRoleAccessHttpModule,
	CountriesRoleAccessHttpTcpModule,
	CountriesSettingHttpModule,
	CountriesSettingHttpTcpModule,
	CountriesSettingTcpModule,
	CountriesRegionRegionOptionTcpModule,
	CountriesRegionOptionTcpModule,
	CountriesRegionStatusTcpModule,
	CountriesRegionTcpModule,
	CountriesRegionRegionOptionHttpTcpModule,
	CountriesRegionOptionHttpTcpModule,
	CountriesRegionStatusHttpTcpModule,
	CountriesRegionHttpTcpModule,
	CountriesRegionRegionOptionHttpModule,
	CountriesRegionOptionHttpModule,
	CountriesRegionStatusHttpModule,
	CountriesRegionHttpModule,
	CountriesTypeTypeOptionTcpModule,
	CountriesTypeOptionTcpModule,
	CountriesTypeStatusTcpModule,
	CountriesTypeTcpModule,
	CountriesTypeTypeOptionHttpTcpModule,
	CountriesTypeOptionHttpTcpModule,
	CountriesTypeStatusHttpTcpModule,
	CountriesTypeHttpTcpModule,
	CountriesTypeTypeOptionHttpModule,
	CountriesTypeOptionHttpModule,
	CountriesTypeStatusHttpModule,
	CountriesTypeHttpModule,
};

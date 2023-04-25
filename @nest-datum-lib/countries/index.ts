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
	CountryCountryOptionHttpModule as CountriesCountryCountryOptionHttpModule,
	CountryCountryOptionHttpTcpModule as CountriesCountryCountryOptionHttpTcpModule, 
	CountryCountryOptionTcpModule as CountriesCountryCountryOptionTcpModule, 
} from './src/api/country-country-option';
import { 
	CountryOptionHttpModule as CountriesCountryOptionHttpModule,
	CountryOptionHttpTcpModule as CountriesCountryOptionHttpTcpModule, 
	CountryOptionTcpModule as CountriesCountryOptionTcpModule, 
} from './src/api/country-option';
import { 
	CountryStatusHttpModule as CountriesCountryStatusHttpModule,
	CountryStatusHttpTcpModule as CountriesCountryStatusHttpTcpModule,
	CountryStatusTcpModule as CountriesCountryStatusTcpModule, 
} from './src/api/country-status';
import { 
	CountryHttpModule as CountriesCountryHttpModule,
	CountryHttpTcpModule as CountriesCountryHttpTcpModule,
	CountryTcpModule as CountriesCountryTcpModule, 
} from './src/api/country';
import { 
	CityCityOptionHttpModule as CountriesCityCityOptionHttpModule,
	CityCityOptionHttpTcpModule as CountriesCityCityOptionHttpTcpModule, 
	CityCityOptionTcpModule as CountriesCityCityOptionTcpModule, 
} from './src/api/city-city-option';
import { 
	CityOptionHttpModule as CountriesCityOptionHttpModule,
	CityOptionHttpTcpModule as CountriesCityOptionHttpTcpModule, 
	CityOptionTcpModule as CountriesCityOptionTcpModule, 
} from './src/api/city-option';
import { 
	CityStatusHttpModule as CountriesCityStatusHttpModule,
	CityStatusHttpTcpModule as CountriesCityStatusHttpTcpModule,
	CityStatusTcpModule as CountriesCityStatusTcpModule, 
} from './src/api/city-status';
import { 
	CityHttpModule as CountriesCityHttpModule,
	CityHttpTcpModule as CountriesCityHttpTcpModule,
	CityTcpModule as CountriesCityTcpModule, 
} from './src/api/city';

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
	CountriesCityCityOptionHttpModule,
	CountriesCityOptionHttpModule,
	CountriesCityStatusHttpModule,
	CountriesCityHttpModule,
	CountriesCountryCountryOptionHttpModule,
	CountriesCountryOptionHttpModule,
	CountriesCountryStatusHttpModule,
	CountriesCountryHttpModule,
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
	CountriesCityCityOptionHttpTcpModule,
	CountriesCityOptionHttpTcpModule,
	CountriesCityStatusHttpTcpModule,
	CountriesCityHttpTcpModule,
	CountriesCountryCountryOptionHttpTcpModule,
	CountriesCountryOptionHttpTcpModule,
	CountriesCountryStatusHttpTcpModule,
	CountriesCountryHttpTcpModule,
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
	CountriesCityCityOptionTcpModule,
	CountriesCityOptionTcpModule,
	CountriesCityStatusTcpModule,
	CountriesCityTcpModule,
	CountriesCountryCountryOptionTcpModule,
	CountriesCountryOptionTcpModule,
	CountriesCountryStatusTcpModule,
	CountriesCountryTcpModule,
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
};

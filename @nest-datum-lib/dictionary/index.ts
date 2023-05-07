import { 
	SettingHttpModule as DictionarySettingHttpModule,
	SettingHttpTcpModule as DictionarySettingHttpTcpModule,
	SettingTcpModule as DictionarySettingTcpModule, 
} from './src/api/setting';
import { 
	AccessAccessOptionHttpModule as DictionaryAccessAccessOptionHttpModule,
	AccessAccessOptionHttpTcpModule as DictionaryAccessAccessOptionHttpTcpModule, 
	AccessAccessOptionTcpModule as DictionaryAccessAccessOptionTcpModule, 
} from './src/api/access-access-option';
import { 
	AccessOptionHttpModule as DictionaryAccessOptionHttpModule,
	AccessOptionHttpTcpModule as DictionaryAccessOptionHttpTcpModule, 
	AccessOptionTcpModule as DictionaryAccessOptionTcpModule, 
} from './src/api/access-option';
import { 
	AccessStatusHttpModule as DictionaryAccessStatusHttpModule,
	AccessStatusHttpTcpModule as DictionaryAccessStatusHttpTcpModule,
	AccessStatusTcpModule as DictionaryAccessStatusTcpModule, 
} from './src/api/access-status';
import { 
	AccessHttpModule as DictionaryAccessHttpModule,
	AccessHttpTcpModule as DictionaryAccessHttpTcpModule,
	AccessTcpModule as DictionaryAccessTcpModule, 
} from './src/api/access';
import { 
	RoleAccessHttpModule as DictionaryRoleAccessHttpModule,
	RoleAccessHttpTcpModule as DictionaryRoleAccessHttpTcpModule, 
	RoleAccessTcpModule as DictionaryRoleAccessTcpModule, 
} from './src/api/role-access';
import { 
	PostPostOptionHttpModule as DictionaryPostPostOptionHttpModule,
	PostPostOptionHttpTcpModule as DictionaryPostPostOptionHttpTcpModule, 
	PostPostOptionTcpModule as DictionaryPostPostOptionTcpModule, 
} from './src/api/post-post-option';
import { 
	PostOptionHttpModule as DictionaryPostOptionHttpModule,
	PostOptionHttpTcpModule as DictionaryPostOptionHttpTcpModule, 
	PostOptionTcpModule as DictionaryPostOptionTcpModule, 
} from './src/api/post-option';
import { 
	PostStatusHttpModule as DictionaryPostStatusHttpModule,
	PostStatusHttpTcpModule as DictionaryPostStatusHttpTcpModule,
	PostStatusTcpModule as DictionaryPostStatusTcpModule, 
} from './src/api/post-status';
import { 
	PostHttpModule as DictionaryPostHttpModule,
	PostHttpTcpModule as DictionaryPostHttpTcpModule,
	PostTcpModule as DictionaryPostTcpModule, 
} from './src/api/post';
import { 
	CategoryCategoryOptionHttpModule as DictionaryCategoryCategoryOptionHttpModule,
	CategoryCategoryOptionHttpTcpModule as DictionaryCategoryCategoryOptionHttpTcpModule, 
	CategoryCategoryOptionTcpModule as DictionaryCategoryCategoryOptionTcpModule, 
} from './src/api/category-category-option';
import { 
	CategoryOptionHttpModule as DictionaryCategoryOptionHttpModule,
	CategoryOptionHttpTcpModule as DictionaryCategoryOptionHttpTcpModule, 
	CategoryOptionTcpModule as DictionaryCategoryOptionTcpModule, 
} from './src/api/category-option';
import { 
	CategoryStatusHttpModule as DictionaryCategoryStatusHttpModule,
	CategoryStatusHttpTcpModule as DictionaryCategoryStatusHttpTcpModule,
	CategoryStatusTcpModule as DictionaryCategoryStatusTcpModule, 
} from './src/api/category-status';
import { 
	CategoryHttpModule as DictionaryCategoryHttpModule,
	CategoryHttpTcpModule as DictionaryCategoryHttpTcpModule,
	CategoryTcpModule as DictionaryCategoryTcpModule, 
} from './src/api/category';
import { 
	CompanyCompanyOptionHttpModule as DictionaryCompanyCompanyOptionHttpModule,
	CompanyCompanyOptionHttpTcpModule as DictionaryCompanyCompanyOptionHttpTcpModule, 
	CompanyCompanyOptionTcpModule as DictionaryCompanyCompanyOptionTcpModule, 
} from './src/api/company-company-option';
import { 
	CompanyOptionHttpModule as DictionaryCompanyOptionHttpModule,
	CompanyOptionHttpTcpModule as DictionaryCompanyOptionHttpTcpModule, 
	CompanyOptionTcpModule as DictionaryCompanyOptionTcpModule, 
} from './src/api/company-option';
import { 
	CompanyStatusHttpModule as DictionaryCompanyStatusHttpModule,
	CompanyStatusHttpTcpModule as DictionaryCompanyStatusHttpTcpModule,
	CompanyStatusTcpModule as DictionaryCompanyStatusTcpModule, 
} from './src/api/company-status';
import { 
	CompanyHttpModule as DictionaryCompanyHttpModule,
	CompanyHttpTcpModule as DictionaryCompanyHttpTcpModule,
	CompanyTcpModule as DictionaryCompanyTcpModule, 
} from './src/api/company';

const Http = {
	DictionaryAccessAccessOptionHttpModule,
	DictionaryAccessOptionHttpModule,
	DictionaryAccessStatusHttpModule,
	DictionaryAccessHttpModule,
	DictionaryRoleAccessHttpModule,
	DictionarySettingHttpModule,
	DictionaryPostPostOptionHttpModule,
	DictionaryPostOptionHttpModule,
	DictionaryPostStatusHttpModule,
	DictionaryPostHttpModule,
	DictionaryCategoryCategoryOptionHttpModule,
	DictionaryCategoryOptionHttpModule,
	DictionaryCategoryStatusHttpModule,
	DictionaryCategoryHttpModule,
};
const HttpTcp = {
	DictionaryAccessAccessOptionHttpTcpModule,
	DictionaryAccessOptionHttpTcpModule,
	DictionaryAccessStatusHttpTcpModule,
	DictionaryAccessHttpTcpModule,
	DictionaryRoleAccessHttpTcpModule,
	DictionarySettingHttpTcpModule,
	DictionaryPostPostOptionHttpTcpModule,
	DictionaryPostOptionHttpTcpModule,
	DictionaryPostStatusHttpTcpModule,
	DictionaryPostHttpTcpModule,
	DictionaryCategoryCategoryOptionHttpTcpModule,
	DictionaryCategoryOptionHttpTcpModule,
	DictionaryCategoryStatusHttpTcpModule,
	DictionaryCategoryHttpTcpModule,
};
const Tcp = {
	DictionaryAccessAccessOptionTcpModule,
	DictionaryAccessOptionTcpModule,
	DictionaryAccessStatusTcpModule,
	DictionaryAccessTcpModule,
	DictionaryRoleAccessTcpModule,
	DictionarySettingTcpModule,
	DictionaryPostPostOptionTcpModule,
	DictionaryPostOptionTcpModule,
	DictionaryPostStatusTcpModule,
	DictionaryPostTcpModule,
	DictionaryCategoryCategoryOptionTcpModule,
	DictionaryCategoryOptionTcpModule,
	DictionaryCategoryStatusTcpModule,
	DictionaryCategoryTcpModule,
};

export {
	Http,
	HttpTcp,
	Tcp,
	DictionaryAccessAccessOptionTcpModule,
	DictionaryAccessAccessOptionHttpModule,
	DictionaryAccessAccessOptionHttpTcpModule,
	DictionaryAccessOptionTcpModule,
	DictionaryAccessOptionHttpModule,
	DictionaryAccessOptionHttpTcpModule,
	DictionaryAccessStatusTcpModule,
	DictionaryAccessStatusHttpModule,
	DictionaryAccessStatusHttpTcpModule,
	DictionaryAccessHttpModule,
	DictionaryAccessHttpTcpModule,
	DictionaryAccessTcpModule,
	DictionaryRoleAccessTcpModule,
	DictionaryRoleAccessHttpModule,
	DictionaryRoleAccessHttpTcpModule,
	DictionarySettingHttpModule,
	DictionarySettingHttpTcpModule,
	DictionarySettingTcpModule,
	DictionaryPostPostOptionTcpModule,
	DictionaryPostOptionTcpModule,
	DictionaryPostStatusTcpModule,
	DictionaryPostTcpModule,
	DictionaryPostPostOptionHttpTcpModule,
	DictionaryPostOptionHttpTcpModule,
	DictionaryPostStatusHttpTcpModule,
	DictionaryPostHttpTcpModule,
	DictionaryPostPostOptionHttpModule,
	DictionaryPostOptionHttpModule,
	DictionaryPostStatusHttpModule,
	DictionaryPostHttpModule,
	DictionaryCategoryCategoryOptionHttpModule,
	DictionaryCategoryOptionHttpModule,
	DictionaryCategoryStatusHttpModule,
	DictionaryCategoryHttpModule,
	DictionaryCategoryCategoryOptionHttpTcpModule,
	DictionaryCategoryOptionHttpTcpModule,
	DictionaryCategoryStatusHttpTcpModule,
	DictionaryCategoryHttpTcpModule,
	DictionaryCategoryCategoryOptionTcpModule,
	DictionaryCategoryOptionTcpModule,
	DictionaryCategoryStatusTcpModule,
	DictionaryCategoryTcpModule,
};

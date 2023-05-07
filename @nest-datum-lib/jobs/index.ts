import { 
	SettingHttpModule as JobsSettingHttpModule,
	SettingHttpTcpModule as JobsSettingHttpTcpModule,
	SettingTcpModule as JobsSettingTcpModule, 
} from './src/api/setting';
import { 
	AccessAccessOptionHttpModule as JobsAccessAccessOptionHttpModule,
	AccessAccessOptionHttpTcpModule as JobsAccessAccessOptionHttpTcpModule, 
	AccessAccessOptionTcpModule as JobsAccessAccessOptionTcpModule, 
} from './src/api/access-access-option';
import { 
	AccessOptionHttpModule as JobsAccessOptionHttpModule,
	AccessOptionHttpTcpModule as JobsAccessOptionHttpTcpModule, 
	AccessOptionTcpModule as JobsAccessOptionTcpModule, 
} from './src/api/access-option';
import { 
	AccessStatusHttpModule as JobsAccessStatusHttpModule,
	AccessStatusHttpTcpModule as JobsAccessStatusHttpTcpModule,
	AccessStatusTcpModule as JobsAccessStatusTcpModule, 
} from './src/api/access-status';
import { 
	AccessHttpModule as JobsAccessHttpModule,
	AccessHttpTcpModule as JobsAccessHttpTcpModule,
	AccessTcpModule as JobsAccessTcpModule, 
} from './src/api/access';
import { 
	RoleAccessHttpModule as JobsRoleAccessHttpModule,
	RoleAccessHttpTcpModule as JobsRoleAccessHttpTcpModule, 
	RoleAccessTcpModule as JobsRoleAccessTcpModule, 
} from './src/api/role-access';
import { 
	PostPostOptionHttpModule as JobsPostPostOptionHttpModule,
	PostPostOptionHttpTcpModule as JobsPostPostOptionHttpTcpModule, 
	PostPostOptionTcpModule as JobsPostPostOptionTcpModule, 
} from './src/api/post-post-option';
import { 
	PostOptionHttpModule as JobsPostOptionHttpModule,
	PostOptionHttpTcpModule as JobsPostOptionHttpTcpModule, 
	PostOptionTcpModule as JobsPostOptionTcpModule, 
} from './src/api/post-option';
import { 
	PostStatusHttpModule as JobsPostStatusHttpModule,
	PostStatusHttpTcpModule as JobsPostStatusHttpTcpModule,
	PostStatusTcpModule as JobsPostStatusTcpModule, 
} from './src/api/post-status';
import { 
	PostHttpModule as JobsPostHttpModule,
	PostHttpTcpModule as JobsPostHttpTcpModule,
	PostTcpModule as JobsPostTcpModule, 
} from './src/api/post';
import { 
	CategoryCategoryOptionHttpModule as JobsCategoryCategoryOptionHttpModule,
	CategoryCategoryOptionHttpTcpModule as JobsCategoryCategoryOptionHttpTcpModule, 
	CategoryCategoryOptionTcpModule as JobsCategoryCategoryOptionTcpModule, 
} from './src/api/category-category-option';
import { 
	CategoryOptionHttpModule as JobsCategoryOptionHttpModule,
	CategoryOptionHttpTcpModule as JobsCategoryOptionHttpTcpModule, 
	CategoryOptionTcpModule as JobsCategoryOptionTcpModule, 
} from './src/api/category-option';
import { 
	CategoryStatusHttpModule as JobsCategoryStatusHttpModule,
	CategoryStatusHttpTcpModule as JobsCategoryStatusHttpTcpModule,
	CategoryStatusTcpModule as JobsCategoryStatusTcpModule, 
} from './src/api/category-status';
import { 
	CategoryHttpModule as JobsCategoryHttpModule,
	CategoryHttpTcpModule as JobsCategoryHttpTcpModule,
	CategoryTcpModule as JobsCategoryTcpModule, 
} from './src/api/category';
import { 
	CompanyCompanyOptionHttpModule as JobsCompanyCompanyOptionHttpModule,
	CompanyCompanyOptionHttpTcpModule as JobsCompanyCompanyOptionHttpTcpModule, 
	CompanyCompanyOptionTcpModule as JobsCompanyCompanyOptionTcpModule, 
} from './src/api/company-company-option';
import { 
	CompanyOptionHttpModule as JobsCompanyOptionHttpModule,
	CompanyOptionHttpTcpModule as JobsCompanyOptionHttpTcpModule, 
	CompanyOptionTcpModule as JobsCompanyOptionTcpModule, 
} from './src/api/company-option';
import { 
	CompanyStatusHttpModule as JobsCompanyStatusHttpModule,
	CompanyStatusHttpTcpModule as JobsCompanyStatusHttpTcpModule,
	CompanyStatusTcpModule as JobsCompanyStatusTcpModule, 
} from './src/api/company-status';
import { 
	CompanyHttpModule as JobsCompanyHttpModule,
	CompanyHttpTcpModule as JobsCompanyHttpTcpModule,
	CompanyTcpModule as JobsCompanyTcpModule, 
} from './src/api/company';

const Http = {
	JobsAccessAccessOptionHttpModule,
	JobsAccessOptionHttpModule,
	JobsAccessStatusHttpModule,
	JobsAccessHttpModule,
	JobsRoleAccessHttpModule,
	JobsSettingHttpModule,
	JobsPostPostOptionHttpModule,
	JobsPostOptionHttpModule,
	JobsPostStatusHttpModule,
	JobsPostHttpModule,
	JobsCategoryCategoryOptionHttpModule,
	JobsCategoryOptionHttpModule,
	JobsCategoryStatusHttpModule,
	JobsCategoryHttpModule,
	JobsCompanyCompanyOptionHttpModule,
	JobsCompanyOptionHttpModule,
	JobsCompanyStatusHttpModule,
	JobsCompanyHttpModule,
};
const HttpTcp = {
	JobsAccessAccessOptionHttpTcpModule,
	JobsAccessOptionHttpTcpModule,
	JobsAccessStatusHttpTcpModule,
	JobsAccessHttpTcpModule,
	JobsRoleAccessHttpTcpModule,
	JobsSettingHttpTcpModule,
	JobsPostPostOptionHttpTcpModule,
	JobsPostOptionHttpTcpModule,
	JobsPostStatusHttpTcpModule,
	JobsPostHttpTcpModule,
	JobsCategoryCategoryOptionHttpTcpModule,
	JobsCategoryOptionHttpTcpModule,
	JobsCategoryStatusHttpTcpModule,
	JobsCategoryHttpTcpModule,
	JobsCompanyCompanyOptionHttpTcpModule,
	JobsCompanyOptionHttpTcpModule,
	JobsCompanyStatusHttpTcpModule,
	JobsCompanyHttpTcpModule,
};
const Tcp = {
	JobsAccessAccessOptionTcpModule,
	JobsAccessOptionTcpModule,
	JobsAccessStatusTcpModule,
	JobsAccessTcpModule,
	JobsRoleAccessTcpModule,
	JobsSettingTcpModule,
	JobsPostPostOptionTcpModule,
	JobsPostOptionTcpModule,
	JobsPostStatusTcpModule,
	JobsPostTcpModule,
	JobsCategoryCategoryOptionTcpModule,
	JobsCategoryOptionTcpModule,
	JobsCategoryStatusTcpModule,
	JobsCategoryTcpModule,
	JobsCompanyCompanyOptionTcpModule,
	JobsCompanyOptionTcpModule,
	JobsCompanyStatusTcpModule,
	JobsCompanyTcpModule,
};

export {
	Http,
	HttpTcp,
	Tcp,
	JobsAccessAccessOptionTcpModule,
	JobsAccessAccessOptionHttpModule,
	JobsAccessAccessOptionHttpTcpModule,
	JobsAccessOptionTcpModule,
	JobsAccessOptionHttpModule,
	JobsAccessOptionHttpTcpModule,
	JobsAccessStatusTcpModule,
	JobsAccessStatusHttpModule,
	JobsAccessStatusHttpTcpModule,
	JobsAccessHttpModule,
	JobsAccessHttpTcpModule,
	JobsAccessTcpModule,
	JobsRoleAccessTcpModule,
	JobsRoleAccessHttpModule,
	JobsRoleAccessHttpTcpModule,
	JobsSettingHttpModule,
	JobsSettingHttpTcpModule,
	JobsSettingTcpModule,
	JobsPostPostOptionTcpModule,
	JobsPostOptionTcpModule,
	JobsPostStatusTcpModule,
	JobsPostTcpModule,
	JobsPostPostOptionHttpTcpModule,
	JobsPostOptionHttpTcpModule,
	JobsPostStatusHttpTcpModule,
	JobsPostHttpTcpModule,
	JobsPostPostOptionHttpModule,
	JobsPostOptionHttpModule,
	JobsPostStatusHttpModule,
	JobsPostHttpModule,
	JobsCategoryCategoryOptionHttpModule,
	JobsCategoryOptionHttpModule,
	JobsCategoryStatusHttpModule,
	JobsCategoryHttpModule,
	JobsCategoryCategoryOptionHttpTcpModule,
	JobsCategoryOptionHttpTcpModule,
	JobsCategoryStatusHttpTcpModule,
	JobsCategoryHttpTcpModule,
	JobsCategoryCategoryOptionTcpModule,
	JobsCategoryOptionTcpModule,
	JobsCategoryStatusTcpModule,
	JobsCategoryTcpModule,
	JobsCompanyCompanyOptionHttpModule,
	JobsCompanyOptionHttpModule,
	JobsCompanyStatusHttpModule,
	JobsCompanyHttpModule,
	JobsCompanyCategoryOptionHttpTcpModule,
	JobsCompanyOptionHttpTcpModule,
	JobsCompanyStatusHttpTcpModule,
	JobsCompanyHttpTcpModule,
	JobsCompanyCategoryOptionTcpModule,
	JobsCompanyOptionTcpModule,
	JobsCompanyStatusTcpModule,
	JobsCompanyTcpModule,
};

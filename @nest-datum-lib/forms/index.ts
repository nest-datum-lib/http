import { 
	SettingHttpModule as FormsSettingHttpModule,
	SettingHttpTcpModule as FormsSettingHttpTcpModule,
	SettingTcpModule as FormsSettingTcpModule, 
} from './src/api/setting';
import { 
	AccessAccessOptionHttpModule as FormsAccessAccessOptionHttpModule,
	AccessAccessOptionHttpTcpModule as FormsAccessAccessOptionHttpTcpModule, 
	AccessAccessOptionTcpModule as FormsAccessAccessOptionTcpModule, 
} from './src/api/access-access-option';
import { 
	AccessOptionHttpModule as FormsAccessOptionHttpModule,
	AccessOptionHttpTcpModule as FormsAccessOptionHttpTcpModule, 
	AccessOptionTcpModule as FormsAccessOptionTcpModule, 
} from './src/api/access-option';
import { 
	AccessStatusHttpModule as FormsAccessStatusHttpModule,
	AccessStatusHttpTcpModule as FormsAccessStatusHttpTcpModule,
	AccessStatusTcpModule as FormsAccessStatusTcpModule, 
} from './src/api/access-status';
import { 
	AccessHttpModule as FormsAccessHttpModule,
	AccessHttpTcpModule as FormsAccessHttpTcpModule,
	AccessTcpModule as FormsAccessTcpModule, 
} from './src/api/access';
import { 
	RoleAccessHttpModule as FormsRoleAccessHttpModule,
	RoleAccessHttpTcpModule as FormsRoleAccessHttpTcpModule, 
	RoleAccessTcpModule as FormsRoleAccessTcpModule, 
} from './src/api/role-access';
import { 
	FieldFieldOptionHttpModule as FormsFieldFieldOptionHttpModule,
	FieldFieldOptionHttpTcpModule as FormsFieldFieldOptionHttpTcpModule, 
	FieldFieldOptionTcpModule as FormsFieldFieldOptionTcpModule, 
} from './src/api/field-field-option';
import { 
	FieldOptionHttpModule as FormsFieldOptionHttpModule,
	FieldOptionHttpTcpModule as FormsFieldOptionHttpTcpModule, 
	FieldOptionTcpModule as FormsFieldOptionTcpModule, 
} from './src/api/field-option';
import { 
	FieldStatusHttpModule as FormsFieldStatusHttpModule,
	FieldStatusHttpTcpModule as FormsFieldStatusHttpTcpModule,
	FieldStatusTcpModule as FormsFieldStatusTcpModule, 
} from './src/api/field-status';
import { 
	FieldHttpModule as FormsFieldHttpModule,
	FieldHttpTcpModule as FormsFieldHttpTcpModule,
	FieldTcpModule as FormsFieldTcpModule, 
} from './src/api/field';
import { 
	FormFieldHttpModule as FormsFormFieldHttpModule,
	FormFieldHttpTcpModule as FormsFormFieldHttpTcpModule,
	FormFieldTcpModule as FormsFormFieldTcpModule, 
} from './src/api/form-field';
import { 
	FormFormOptionHttpModule as FormsFormFormOptionHttpModule,
	FormFormOptionHttpTcpModule as FormsFormFormOptionHttpTcpModule, 
	FormFormOptionTcpModule as FormsFormFormOptionTcpModule, 
} from './src/api/form-form-option';
import { 
	FormOptionHttpModule as FormsFormOptionHttpModule,
	FormOptionHttpTcpModule as FormsFormOptionHttpTcpModule, 
	FormOptionTcpModule as FormsFormOptionTcpModule, 
} from './src/api/form-option';
import { 
	FormStatusHttpModule as FormsFormStatusHttpModule,
	FormStatusHttpTcpModule as FormsFormStatusHttpTcpModule,
	FormStatusTcpModule as FormsFormStatusTcpModule, 
} from './src/api/form-status';
import { 
	FormHttpModule as FormsFormHttpModule,
	FormHttpTcpModule as FormsFormHttpTcpModule,
	FormTcpModule as FormsFormTcpModule, 
} from './src/api/form';
import { 
	FieldContentHttpModule as FormsFieldContentHttpModule,
	FieldContentHttpTcpModule as FormsFieldContentHttpTcpModule,
	FieldContentTcpModule as FormsFieldContentTcpModule, 
} from './src/api/field-content';
import { 
	ContentStatusHttpModule as FormsContentStatusHttpModule,
	ContentStatusHttpTcpModule as FormsContentStatusHttpTcpModule,
	ContentStatusTcpModule as FormsContentStatusTcpModule, 
} from './src/api/content-status';
import { 
	ContentHttpModule as FormsContentHttpModule,
	ContentHttpTcpModule as FormsContentHttpTcpModule,
	ContentTcpModule as FormsContentTcpModule, 
} from './src/api/content';

const Http = {
	FormsAccessAccessOptionHttpModule,
	FormsAccessOptionHttpModule,
	FormsAccessStatusHttpModule,
	FormsAccessHttpModule,
	FormsRoleAccessHttpModule,
	FormsSettingHttpModule,
	FormsFieldFieldOptionHttpModule,
	FormsFieldOptionHttpModule,
	FormsFieldStatusHttpModule,
	FormsFieldHttpModule,
	FormsFormFieldHttpModule,
	FormsFormOptionHttpModule,
	FormsFormStatusHttpModule,
	FormsFormHttpModule,
	FormsContentStatusHttpModule,
	FormsContentHttpModule,
	FormsFieldContentHttpModule,
};
const HttpTcp = {
	FormsAccessAccessOptionHttpTcpModule,
	FormsAccessOptionHttpTcpModule,
	FormsAccessStatusHttpTcpModule,
	FormsAccessHttpTcpModule,
	FormsRoleAccessHttpTcpModule,
	FormsSettingHttpTcpModule,
	FormsFieldFieldOptionHttpTcpModule,
	FormsFieldOptionHttpTcpModule,
	FormsFieldStatusHttpTcpModule,
	FormsFieldHttpTcpModule,
	FormsFormFieldHttpTcpModule,
	FormsFormFormOptionHttpTcpModule,
	FormsFormOptionHttpTcpModule,
	FormsFormStatusHttpTcpModule,
	FormsFormHttpTcpModule,
	FormsContentStatusHttpTcpModule,
	FormsContentHttpTcpModule,
	FormsFieldContentHttpTcpModule,
};
const Tcp = {
	FormsAccessAccessOptionTcpModule,
	FormsAccessOptionTcpModule,
	FormsAccessStatusTcpModule,
	FormsAccessTcpModule,
	FormsRoleAccessTcpModule,
	FormsSettingTcpModule,
	FormsFieldFieldOptionTcpModule,
	FormsFieldOptionTcpModule,
	FormsFieldStatusTcpModule,
	FormsFieldTcpModule,
	FormsFormFieldTcpModule,
	FormsFormFormOptionTcpModule,
	FormsFormOptionTcpModule,
	FormsFormStatusTcpModule,
	FormsFormTcpModule,
	FormsContentStatusTcpModule,
	FormsContentTcpModule,
	FormsFieldContentTcpModule,
};

export {
	Http,
	HttpTcp,
	Tcp,
	FormsAccessAccessOptionTcpModule,
	FormsAccessAccessOptionHttpModule,
	FormsAccessAccessOptionHttpTcpModule,
	FormsAccessOptionTcpModule,
	FormsAccessOptionHttpModule,
	FormsAccessOptionHttpTcpModule,
	FormsAccessStatusTcpModule,
	FormsAccessStatusHttpModule,
	FormsAccessStatusHttpTcpModule,
	FormsAccessHttpModule,
	FormsAccessHttpTcpModule,
	FormsAccessTcpModule,
	FormsRoleAccessTcpModule,
	FormsRoleAccessHttpModule,
	FormsRoleAccessHttpTcpModule,
	FormsSettingHttpModule,
	FormsSettingHttpTcpModule,
	FormsSettingTcpModule,
	FormsFieldFieldOptionTcpModule,
	FormsFieldOptionTcpModule,
	FormsFieldStatusTcpModule,
	FormsFieldTcpModule,
	FormsFieldFieldOptionHttpModule,
	FormsFieldOptionHttpModule,
	FormsFieldStatusHttpModule,
	FormsFieldHttpModule,
	FormsFormFieldHttpModule,
	FormsFormFieldHttpTcpModule,
	FormsFormFieldTcpModule,
	FormsFormFormOptionTcpModule,
	FormsFormOptionTcpModule,
	FormsFormStatusTcpModule,
	FormsFormTcpModule,
	FormsFormOptionHttpModule,
	FormsFormStatusHttpModule,
	FormsFormHttpModule,
	FormsContentStatusHttpModule,
	FormsContentHttpModule,
	FormsContentStatusHttpTcpModule,
	FormsContentHttpTcpModule,
	FormsContentStatusTcpModule,
	FormsContentTcpModule,
	FormsFieldContentHttpModule,
	FormsFieldContentHttpTcpModule,
	FormsFieldContentTcpModule,
};

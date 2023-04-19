import { 
	hookUrlNavigate,
	actionApiFormCreate, 
	actionApiFormProp,
} from '@nest-datum-ui/Store';
import { store as utilsValidateStore } from '@nest-datum-utils/validate';
import { 
	strFilled as utilsCheckStrFilled,
	strEmail as utilsCheckStrEmail,
	objDateRange as utilsCheckObjDateRange, 
} from '@nest-datum-utils/check';

const submit = async (e, storeName, apiUrl, userId) => {
	const validatedData = await utilsValidateStore(storeName, {
		title: {
			text: 'Required field. Fill in your job tittle',
			check: [ utilsCheckStrFilled ],
			isRequired: true,
		},
		company: {
			text: 'Required field. Fill in your company',
			check: [ utilsCheckStrFilled ],
			isRequired: true,
		},
		dateRange: {
			text: 'Required field. Fill in Title',
			check: [ utilsCheckObjDateRange ],
			isRequired: true,
		},
		contactName: {
			text: 'Wrong format',
			check: [ utilsCheckStrFilled ],
		},
		contactEmail: {
			text: 'Wrong format',
			check: [ utilsCheckStrEmail ],
		},
	});

	if (validatedData) {
		actionApiFormCreate(storeName, { /*apiUrl,*/ })(() => {
			setTimeout(() => actionApiFormProp(storeName, 'loader', false)(), 0);

			hookUrlNavigate(`/${process.env.ROUTE_AUTHED}/${userId}`);
		});
	}
};

export default submit;

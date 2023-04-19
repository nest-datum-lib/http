import Store, { 
	hookUrlNavigate,
	actionApiFormCreate, 
	actionApiFormPurge,
} from '@nest-datum-ui/Store';
import { store as utilsValidateStore } from '@nest-datum-utils/validate';
import { 
	strFilled as utilsCheckStrFilled,
	bool as utilsCheckBool,
	objDate as utilsCheckObjDate,
} from '@nest-datum-utils/check';

const submit = async (e, storeName, apiUrl, notRedirect = false) => {
	const authData = (Store()
		.getState()
		.api
		.form['sso-sign-in'] || {});
	const validatedData = await utilsValidateStore(storeName, {
		name: {
			text: 'Required field.',
			check: [ utilsCheckStrFilled ],
			isRequired: true,
		},
		expirationAt: {
			text: 'Required field.',
			check: [ utilsCheckObjDate ],
			isRequired: true,
		},
		isExpired: {
			text: 'Invalid format.',
			check: [ utilsCheckBool ],
		},
	});

	if (validatedData && authData['id']) {
		actionApiFormCreate(storeName, { /*apiUrl,*/ })(() => {
			setTimeout(() => actionApiFormPurge(storeName)(), 0);

			if (!notRedirect) {
				hookUrlNavigate(`/${process.env.ROUTE_AUTHED}/${authData['id']}`);
			}
		});
	}
};

export default submit;

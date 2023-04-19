import Store, { 
	hookUrlNavigate,
	actionApiFormCreate, 
	actionApiFormPurge,
} from '@nest-datum-ui/Store';
import { store as utilsValidateStore } from '@nest-datum-utils/validate';
import { 
	strFilled as utilsCheckStrFilled,
	bool as utilsCheckBool, 
} from '@nest-datum-utils/check';

const submit = async (e, storeName, apiUrl) => {
	const authData = (Store()
		.getState()
		.api
		.form['sso-sign-in'] || {});
	const validatedData = await utilsValidateStore(storeName, {
		place: {
			text: 'Invalid format.',
			check: [ utilsCheckStrFilled ],
		},
		isReady: {
			text: 'Invalid format.',
			check: [ utilsCheckBool ],
		},
		isAnyPlace: {
			text: 'Invalid format.',
			check: [ utilsCheckBool ],
		},
	});

	if (validatedData && authData['id']) {
		actionApiFormCreate(storeName, { /*apiUrl,*/ })(() => {
			setTimeout(() => actionApiFormPurge(storeName)(), 0);

			hookUrlNavigate(`/${process.env.ROUTE_AUTHED}/${authData['id']}/${process.env.ROUTE_JOB_PREFERENCES}`);
		});
	}
};

export default submit;

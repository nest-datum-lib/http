import Store, { 
	actionApiFormCreate, 
	actionApiFormPurge,
} from '@nest-datum-ui/Store';
import { store as utilsValidateStore } from '@nest-datum-utils/validate';
import { 
	strFilled as utilsCheckStrFilled,
	strEmail as utilsCheckStrEmail, 
} from '@nest-datum-utils/check';

const submit = async (e, storeName, apiUrl) => {
	const authData = (Store()
		.getState()
		.api
		.form['sso-sign-in'] || {});
	const validatedData = await utilsValidateStore(storeName, {
		text: {
			text: 'Invalid format.',
			check: [ utilsCheckStrFilled ],
		},
		email: {
			text: 'Invalid format.',
			check: [ utilsCheckStrEmail ],
		},
	});

	if (validatedData && authData['id']) {
		actionApiFormCreate(storeName, { /*apiUrl,*/ })(() => {
			setTimeout(() => actionApiFormPurge(storeName)(), 0);
		});
	}
};

export default submit;

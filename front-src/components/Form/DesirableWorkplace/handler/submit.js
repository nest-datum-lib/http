import { 
	hookUrlNavigate,
	actionApiFormCreate, 
	actionApiFormProp,
} from '@nest-datum-ui/Store';
import { store as utilsValidateStore } from '@nest-datum-utils/validate';
import { strId as utilsCheckStrId } from '@nest-datum-utils/check';

const submit = async (e, storeName, apiUrl, nextPageUrl) => {
	const validatedData = await utilsValidateStore(storeName, {
		preferencesWorkplace: {
			text: 'Required field.',
			check: [ utilsCheckStrId ]
		},
		preferencesWorktype: {
			text: 'Required field.',
			check: [ utilsCheckStrId ]
		},
	});

	if (validatedData) {
		actionApiFormCreate(storeName, { /*apiUrl,*/ })(() => {
			actionApiFormProp(storeName, 'loader', false)();
		});

		hookUrlNavigate(nextPageUrl);
	}
};

export default submit;

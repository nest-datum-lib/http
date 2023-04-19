import Store, { 
	hookUrlNavigate,
	actionApiFormCreate, 
	actionApiFormProp,
} from '@nest-datum-ui/Store';
import { store as utilsValidateStore } from '@nest-datum-utils/validate';
import { arrFilled as utilsCheckArrFilled } from '@nest-datum-utils/check';

const submit = async (e, storeName, apiUrl, nextPageUrl) => {
	const data = (Store()
		.getState()
		.api
		.list[storeName] || {})
		.data || [];
	const validatedData = await utilsValidateStore(storeName, {
		skills: {
			text: 'Required field',
			check: [ () => utilsCheckArrFilled(data) ]
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

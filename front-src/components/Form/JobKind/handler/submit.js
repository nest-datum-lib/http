import { 
	hookUrlNavigate,
	actionApiFormCreate, 
	actionApiFormProp,
} from '@nest-datum-ui/Store';
import { store as utilsValidateStore } from '@nest-datum-utils/validate';
import { strFilled as utilsCheckStrFilled } from '@nest-datum-utils/check';

const submit = async (e, storeName, apiUrl, nextPageUrl) => {
	const validatedData = await utilsValidateStore(storeName, {
		jobKind: {
			text: 'Required field. Fill in your job title',
			check: [ utilsCheckStrFilled ],
			isRequired: true,
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

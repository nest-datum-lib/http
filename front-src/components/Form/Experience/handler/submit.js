import { 
	hookUrlNavigate,
	actionApiFormCreate, 
	actionApiFormProp,
} from '@nest-datum-ui/Store';
import { store as utilsValidateStore } from '@nest-datum-utils/validate';
import { 
	strFilled as utilsCheckStrFilled,
	objDateRange as utilsCheckObjDateRange, 
} from '@nest-datum-utils/check';

const submit = async (e, storeName, apiUrl, nextPageUrl) => {
	const validatedData = await utilsValidateStore(storeName, {
		lastExperienceTitle: {
			text: 'Required field. Fill in your job tittle',
			check: [ utilsCheckStrFilled ]
		},
		lastExperienceCompany: {
			text: 'Required field. Fill in your company',
			check: [ utilsCheckStrFilled ]
		},
		lastExperienceDateRange: {
			text: 'Required field. Fill in Title',
			check: [ utilsCheckObjDateRange ]
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

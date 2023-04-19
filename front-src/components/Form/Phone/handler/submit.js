import Store, { 
	hookUrlNavigate,
	actionApiFormCreate, 
	actionApiFormProp,
} from '@nest-datum-ui/Store';
import { store as utilsValidateStore } from '@nest-datum-utils/validate';
import { 
	strFilled as utilsCheckStrFilled,
	obj as utilsCheckObj, 
} from '@nest-datum-utils/check';

const submit = async (e, storeName, apiUrl, nextPageUrl) => {
	const phoneList = (Store()
		.getState()
		.api
		.list[storeName] || {})
		.data || [];
	const {
		phone_additionalValue: phoneCode,
		phone,
	} = (Store()
		.getState()
		.api
		.form[storeName] || {});
	const currentCountryData = phoneList.find((item) => item['phoneCode'] === phoneCode);

	if (utilsCheckObj(currentCountryData)) {
		const validatedData = await utilsValidateStore(storeName, {
			phone: [{
				text: 'Required field. Fill in Phone number',
				check: [ utilsCheckStrFilled ]
			}, {
				text: 'Wrong format of phone.',
				check: [
					(value, fieldName) => (phoneCode + value).indexOf(currentCountryData.phoneCode) === 0,
					(value, fieldName) => (phoneCode + value).length === currentCountryData.maxCount + currentCountryData.phoneCode.length,
				],
			}],
		}, { errorStrategy: 'combine' });

		if (validatedData) {
			actionApiFormCreate(storeName, { /*apiUrl,*/ mergeData: { phone: phoneCode + phone } })(() => {
				actionApiFormProp(storeName, 'loader', false)();
			});

			hookUrlNavigate(nextPageUrl);
		}
	}
};

export default submit;

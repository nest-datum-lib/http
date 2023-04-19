import Store, { 
	hookUrlNavigate,
	actionApiFormCreate, 
	actionApiFormProp,
} from '@nest-datum-ui/Store';
import { store as utilsValidateStore } from '@nest-datum-utils/validate';
import { 
	strFilled as utilsCheckStrFilled,
	strEmail as utilsCheckStrEmail,
	strId as utilsCheckStrId,
} from '@nest-datum-utils/check';

const submit = async (e, storeName, apiUrl, userId) => {
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

	const validatedData = await utilsValidateStore(storeName, {
		fullName: {
			text: 'Required field. Fill in your Full Name',
			check: [ utilsCheckStrFilled ],
			isRequired: true,
		},
		position: {
			text: 'Required field. Fill in your Position',
			check: [ utilsCheckStrFilled ],
			isRequired: true,
		},
		location: {
			text: 'Required field. Fill in your Location',
			check: [ utilsCheckStrFilled ],
			isRequired: true,
		},
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
		email: {
			text: 'Required field. Fill in your Email',
			check: [ utilsCheckStrEmail ],
			isRequired: true,
		},
		facebook: {
			text: 'Required field. Fill in your degree',
			check: [ utilsCheckStrFilled ],
		},
		linkedin: {
			text: 'Wrong format',
			check: [ utilsCheckStrFilled ],
		},
		cvStatusId: {
			text: 'Wrong format',
			check: [ utilsCheckStrId ],
		},
	});

	if (validatedData) {
		actionApiFormCreate(storeName, { /*apiUrl,*/ mergeData: { phone: phoneCode + phone } })(() => {
			setTimeout(() => actionApiFormProp(storeName, 'loader', false)(), 0);

			hookUrlNavigate(`/${process.env.ROUTE_AUTHED}/${userId}`);
		});
	}
};

export default submit;

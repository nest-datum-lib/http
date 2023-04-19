import Store, { 
	hookUrlNavigate,
	actionApiFormCreate, 
	actionApiFormPurge,
	actionApiListPush,
} from '@nest-datum-ui/Store';
import { store as utilsValidateStore } from '@nest-datum-utils/validate';
import { strFilled as utilsCheckStrFilled } from '@nest-datum-utils/check';

const langs = [{
	id: '1',
	title: 'English',
}, {
	id: '2',
	title: 'German',
}];
const langLevels = [{
	id: '1',
	title: 'Basic',
}, {
	id: '2',
	title: 'Middle',
}, {
	id: '3',
	title: 'Advanced',
}, {
	id: '4',
	title: 'Fluent',
}];

const submit = async (e, storeName, apiUrl, notRedirect = false) => {
	const authData = (Store()
		.getState()
		.api
		.form['sso-sign-in'] || {});
	const addedListData = (Store()
		.getState()
		.api
		.list[`${storeName}_added`] || {})
		.data || [];
	const validatedData = await utilsValidateStore(storeName, {
		name: [{
			text: 'Required field.',
			check: [ utilsCheckStrFilled ],
			isRequired: true,
		}, {
			text: 'Test.',
			check: [ (value, name, data) => !addedListData.find((item) => item.id === value) ],
			isRequired: true,
		}],
		level: {
			text: 'Required field.',
			check: [ utilsCheckStrFilled ],
			isRequired: true,
		},
	});

	if (validatedData && authData['id']) {
		actionApiFormCreate(storeName, { /*apiUrl,*/ })(() => {
			setTimeout(() => actionApiFormPurge(storeName)(), 0);

			if (notRedirect) {
				actionApiListPush(`${storeName}_added`, { 
					...validatedData,
					id: validatedData.name,
					name: (langs.find((item) => item.id === validatedData.name)).title,
					level: (langLevels.find((item) => item.id === validatedData.level)).title,
				})();
			}
			else {
				hookUrlNavigate(`/${process.env.ROUTE_AUTHED}/${authData['id']}`);
			}
		});
	}
};

export default submit;

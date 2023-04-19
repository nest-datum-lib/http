import { 
	hookUrlNavigate,
	actionApiFormCreate, 
	actionApiFormProp,
	actionApiListGet,
} from '@nest-datum-ui/Store';
import { store as utilsValidateStore } from '@nest-datum-utils/validate';
import { strFilled as utilsCheckStrFilled } from '@nest-datum-utils/check';

const submit = async (e, {
	storeName, 
	apiUrl, 
	nextPageUrl,
	quickOffersStoreName,
	quickOffersApiUrl,
}) => {
	const validatedData = await utilsValidateStore(storeName, {
		jobLocation: {
			text: 'Required field. Fill in your location',
			check: [ utilsCheckStrFilled ],
			isRequired: true,
		},
	});

	if (validatedData) {
		actionApiFormCreate(storeName, { /*apiUrl,*/ })(() => {
			setTimeout(() => {
				actionApiListGet(quickOffersStoreName, {
					// apiUrl: quickOffersApiUrl,
					data: [{
						id: '1',
						company: 'Apple',
						title: 'Business Analyst',
						salary: '64 000$/year',
						location: 'New York',
					}, {
						id: '2',
						company: 'EY (former Ernst & Young LLC)',
						title: 'Data entry specialist',
						salary: '220 000$/year',
						location: 'Los Angeles',
					}, {
						id: '3',
						company: 'McDonalds',
						title: 'Crew Member',
						salary: '64 $/hour',
						location: 'California',
					}],
				})();
				hookUrlNavigate(nextPageUrl);
				setTimeout(() => actionApiFormProp(storeName, 'loader', false)(), 0);
			}, 0);
		});
	}
};

export default submit;

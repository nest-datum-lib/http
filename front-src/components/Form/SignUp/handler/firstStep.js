import { store as utilsValidateStore } from '@nest-datum-utils/validate';
import { 
	strFilled as utilsCheckStrFilled,
	strEmail as utilsCheckStrEmail, 
} from '@nest-datum-utils/check';

const firstStep = async (e, storeName, apiUrl, setStep = () => {}) => {
	const validatedData = await utilsValidateStore(storeName, {
		email: {
			text: 'Required field. Fill in your degree',
			check: [ utilsCheckStrEmail ],
			isRequired: true,
		},
		firstname: {
			text: 'Required field. Fill in your degree',
			check: [ utilsCheckStrFilled ],
			isRequired: true,
		},
		lastname: {
			text: 'Required field. Fill in your degree',
			check: [ utilsCheckStrFilled ],
			isRequired: true,
		},
	});

	if (validatedData) {
		setStep((currentState) => currentState + 1);
	}
};

export default firstStep;

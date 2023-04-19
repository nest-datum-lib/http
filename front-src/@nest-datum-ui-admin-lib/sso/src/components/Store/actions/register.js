import axios from 'axios';
import {
	strPassword as utilsCheckStrPassword,
	strUserName as utilsCheckStrUserName,
	strEmail as utilsCheckStrEmail,
} from '@nest-datum-utils/check';
import { httpErrorMessage as utilsFormatHttpErrorMessage } from '@nest-datum-utils/format';
import { store as utilsValidateStore } from '@nest-datum-utils/validate';
import { 
	actionApiFormClear,
	actionApiFormProp,
} from '@nest-datum-ui/Store';

export const fireRegister = async (storeName, apiUrl) => async (callback = () => {}) => {
	try {
		actionApiFormProp(storeName, 'loader', true)();

		const {
			email,
			login,
			firstname,
			lastname,
			password,
			repeatedPassword,
		} = await utilsValidateStore(storeName, {
			email: {
				text: 'Email is not valid.',
				check: [ utilsCheckStrEmail ],
				isRequired: true,
			},
			login: {
				text: 'Login is not valid.',
				check: [ utilsCheckStrEmail ],
				isRequired: true,
			},
			firstname: {
				text: 'First name is not valid.',
				check: [ utilsCheckStrUserName ],
				isRequired: true,
			},
			lastname: {
				text: 'Last name is not valid.',
				check: [ utilsCheckStrUserName ],
				isRequired: true,
			},
			password: {
				text: 'Password not specified.',
				check: [ utilsCheckStrPassword ],
				isRequired: true,
			},
			repeatedPassword: {
				text: 'Passwords do not match.',
				check: [
					utilsCheckStrPassword,
					(repeatedPassword, fieldName, all) => {
						return repeatedPassword === all['password'];
					},
				],
				isRequired: true,
			},
		});

		if (email 
			&& login
			&& firstname
			&& lastname
			&& password
			&& repeatedPassword) {
			await axios.post(apiUrl, {
				email,
				login,
				firstname,
				lastname,
				password,
				repeatedPassword,
			});

			actionApiFormClear(storeName, { successfulRegistrationFlag: true })();
			callback({
				email,
				login,
				firstname,
				lastname,
				password,
				repeatedPassword,
			});
		}
	}
	catch (err) {
		actionApiFormClear(storeName)();

		throw new Error(utilsFormatHttpErrorMessage(err, apiUrl));
	}
};

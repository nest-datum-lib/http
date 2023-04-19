import { 
	hookSnackbar,
	hookUrlNavigate,
	actionApiFormCreate,
	actionApiFormProp, 
} from '@nest-datum-ui/Store';
import { store as utilsValidateStore } from '@nest-datum-utils/validate';
import {
	objFileFormat as utilsCheckObjFileFormat,
	objFileSize as utilsCheckObjFileSize,
} from '@nest-datum-utils/check';
import ErrorFormat from '../Error/Format.jsx';
import ErrorSize from '../Error/Size.jsx';

const submit = async (e, storeName, apiUrl, nextPageUrl) => {
	e.target.elements['file']['files']['systemId'] = 'files-system-cv';

	const validatedData = await utilsValidateStore(storeName, {
		file: [{
			text: ErrorFormat,
			check: [ utilsCheckObjFileFormat ],
		}, {
			text: ErrorSize,
			check: [ utilsCheckObjFileSize ],
		}],
	}, { errorStrategy: 'immediate' });

	if (validatedData) {
		await actionApiFormCreate(storeName, { /*apiUrl*/ })(() => {
			actionApiFormProp(storeName, 'loader', false)();
			
			hookSnackbar('Your file is successfully downloaded.', { variant: 'success' });
			hookUrlNavigate(nextPageUrl);
		});
	}
};

export default submit;

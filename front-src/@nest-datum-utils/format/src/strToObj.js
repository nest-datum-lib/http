import { obj as utilsCheckObj } from '@nest-datum-utils/check';

const strToObj = (value) => {
	if (utilsCheckObj(value)) {
		return value;
	}
	try {
		return JSON.parse(value);
	}
	catch (err) {
		return undefined;
	}
};

export default strToObj;

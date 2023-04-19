import utilsCheckStr from './index.js';

const pdf = (value = '') => {
	if (!utilsCheckStr(value)) {
		return false;
	}
	const valueSplit = value.split('.');

	return valueSplit[valueSplit.length - 1] === 'pdf'
		|| value.indexOf('data:application/pdf;base64') === 0;
};

export default pdf;

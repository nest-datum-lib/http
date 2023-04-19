import { strFilled as utilsCheckStrFilled } from '@nest-datum-utils/check';

const strDate = (value) => {
	if (!utilsCheckStrFilled(value) && value.length !== 6) {
		return false;
	}
	const valueSplit = value.split('');
	const month = valueSplit.slice(0,4);
	const year = valueSplit.slice(4);

	
	if (month >= 1 && month <= 12) {
		return new Date(year, month - 1);
	}
	return false;
};

export default strDate;

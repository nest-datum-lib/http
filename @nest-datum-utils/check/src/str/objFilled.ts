
const objFilled = (value) => {
	try {
		return Object.keys(JSON.parse(value || '{}') || {}).length > 0;
	}
	catch (err) {
		return false;
	}

};

export default objFilled;

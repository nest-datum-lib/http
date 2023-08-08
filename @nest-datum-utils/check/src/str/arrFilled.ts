
const arrFilled = (value) => {
	try {
		return (JSON.parse(value || '[]') || []).length > 0;
	}
	catch (err) {
		return false;
	}

};

export default arrFilled;

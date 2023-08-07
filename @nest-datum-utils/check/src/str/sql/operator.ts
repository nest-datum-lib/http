
const variants = [
	'$Not', 
	'$LessThan',
	'$LessThanOrEqual',
	'$MoreThan',
	'$MoreThanOrEqual',
	'$Equal',
	'$Like',
	'$ILike',
	'$Between',
	'$In',
	'$Any',
	'$IsNull',
];

const operator = (value: string): boolean => {
	return variants.findIndex((variant) => value.indexOf(`${variant}('`) === 0) >= 0 && value.slice(value.length - 2, value.length) === `')`;
};

export default operator;

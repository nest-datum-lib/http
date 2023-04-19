import React from 'react';
import {
	func as utilsCheckFunc,
	exists as utilsCheckExists,
} from '@nest-datum-utils/check';
import MuiCheckbox from '@mui/material/Checkbox';
import StyledWrapper from './Styled/Wrapper.jsx';

let Checkbox = ({ 
	storeName,
	type, 
	label, 
	onChange, 
	value, 
	defaultValue, 
	...props 
}) => {
	if (utilsCheckFunc(onChange)) {
		props['checked'] = utilsCheckExists(value)
			? value
			: (utilsCheckExists(defaultValue)
				? defaultValue
				: false);
	}
	else {
		props['defaultChecked'] = utilsCheckExists(value)
			? value
			: (utilsCheckExists(defaultValue)
				? defaultValue
				: false);
	}

	return <StyledWrapper label={label} control={<MuiCheckbox { ...props } onChange={onChange} />} />;
};

Checkbox = React.memo(Checkbox);
Checkbox.defaultProps = {
	type: 'checkbox',
};
Checkbox.propTypes = {
};

export default Checkbox;

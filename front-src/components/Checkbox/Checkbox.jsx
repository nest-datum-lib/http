import React from 'react';
import PropTypes from 'prop-types';
import StyledWrapper from './Styled/Wrapper.jsx';
import BoxWrapper from './Styled/Box.jsx';
import { ReactComponent as CheckboxChecked } from 'static/svg/icons/checkboxChecked-medium.svg';
import { ReactComponent as CheckboxUnchecked } from 'static/svg/icons/checkboxUnchecked-medium.svg';

let Checkbox = ({ storeName, label, ...props }) => {
	return <BoxWrapper>
		<StyledWrapper { ...props } icon={<CheckboxUnchecked />} checkedIcon={<CheckboxChecked />} label={label} storeName={storeName} />
	</BoxWrapper>;
};

Checkbox = React.memo(Checkbox);
Checkbox.defaultProps = {
};
Checkbox.propTypes = {
	name: PropTypes.string,
	onChange: PropTypes.func,
	label: PropTypes.string,
};

export default Checkbox;

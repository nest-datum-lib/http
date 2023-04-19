import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

let Phone = (props) => {
	return <StyledWrapper { ...props } />;
};

Phone = React.memo(Phone);
Phone.defaultProps = {
	name: 'phone',
	label: '',
	placeholder: 'Phone number',
};
Phone.propTypes = {
};

export default Phone;

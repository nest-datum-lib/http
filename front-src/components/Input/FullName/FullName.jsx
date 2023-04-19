import React from 'react';
import PropTypes from 'prop-types';
import StyledWrapper from './Styled/Wrapper.jsx';

let FullName = (props) => {
	return <StyledWrapper { ...props } />;
};

FullName = React.memo(FullName);
FullName.defaultProps = {
	placeholder: 'Full Name',
	name: 'fullName',
};
FullName.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string,
};

export default FullName;

import React from 'react';
import PropTypes from 'prop-types';
import StyledWrapper from './Styled/Wrapper.jsx';

let FirstName = (props) => {
	return <StyledWrapper { ...props } />;
};

FirstName = React.memo(FirstName);
FirstName.defaultProps = {
	label: 'First Name',
	name: 'lastname',
};
FirstName.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string,
};

export default FirstName;

import React from 'react';
import PropTypes from 'prop-types';
import StyledWrapper from './Styled/Wrapper.jsx';

let LastName = (props) => {
	return <StyledWrapper { ...props } />;
};

LastName = React.memo(LastName);
LastName.defaultProps = {
	label: 'Last Name',
	name: 'lastname',
};
LastName.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string,
};

export default LastName;

import React from 'react';
import PropTypes from 'prop-types';
import StyledWrapper from './Styled/Wrapper.jsx';

let Location = (props) => {
	return <StyledWrapper { ...props } />;
};

Location = React.memo(Location);
Location.defaultProps = {
	placeholder: 'Location',
	name: 'location',
};
Location.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string,
};

export default Location;

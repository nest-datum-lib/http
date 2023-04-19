import React from 'react';
import PropTypes from 'prop-types';
import StyledWrapper from './Styled/Wrapper.jsx';

let Position = (props) => {
	return <StyledWrapper { ...props } />;
};

Position = React.memo(Position);
Position.defaultProps = {
	placeholder: 'Position',
	name: 'position',
};
Position.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string,
};

export default Position;

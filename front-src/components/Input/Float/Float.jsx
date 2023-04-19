import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

let Float = (props) => {
	return <StyledWrapper { ...props } />;
};

Float = React.memo(Float);
Float.defaultProps = {
};
Float.propTypes = {
};

export default Float;

import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

let Remote = (props) => {
	return <StyledWrapper { ...props } />;
};

Remote = React.memo(Remote);
Remote.defaultProps = {
};
Remote.propTypes = {
};

export default Remote;

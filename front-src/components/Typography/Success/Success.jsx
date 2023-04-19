import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

/**
 * https://i.imgur.com/nBPpB0i.png
 */
let Success = (props) => {
	return <StyledWrapper { ...props } />;
};

Success = React.memo(Success);
Success.defaultProps = {
};
Success.propTypes = {
};

export default Success;

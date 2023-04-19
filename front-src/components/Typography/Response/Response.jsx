import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

/**
 * https://i.imgur.com/uBdDTw5.png
 */
let Response = (props) => {
	return <StyledWrapper { ...props } />;
};

Response = React.memo(Response);
Response.defaultProps = {
};
Response.propTypes = {
};

export default Response;

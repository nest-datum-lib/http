import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

let Response = (props) => {
	return <StyledWrapper { ...props } />;
};

Response = React.memo(Response);
Response.defaultProps = {
};
Response.propTypes = {
};

export default Response;

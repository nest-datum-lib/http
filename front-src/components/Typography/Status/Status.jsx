import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

/**
 * https://i.imgur.com/jbyjhVe.png
 */
let Status = (props) => {
	return <StyledWrapper { ...props } />;
};

Status = React.memo(Status);
Status.defaultProps = {
    color: 'light',
};
Status.propTypes = {
};

export default Status;

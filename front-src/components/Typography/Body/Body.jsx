import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

/**
 * https://i.imgur.com/TAV8wJY.png
 */
let Body = (props) => {
	return <StyledWrapper { ...props } />;
};

Body = React.memo(Body);
Body.defaultProps = {
};
Body.propTypes = {
};

export default Body;

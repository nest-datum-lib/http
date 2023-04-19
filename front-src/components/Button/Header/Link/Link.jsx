import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

/**
 * https://i.imgur.com/GJyobjD.png
 */
let Link = (props) => {
	return <StyledWrapper { ...props } />;
};

Link = React.memo(Link);
Link.defaultProps = {
};
Link.propTypes = {
};

export default Link;

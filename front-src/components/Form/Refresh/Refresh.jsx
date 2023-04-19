import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

/**
 * https://i.imgur.com/hxG7pdJ.png
 */
let Refresh = (props) => {
	return <StyledWrapper { ...props } />;
};

Refresh = React.memo(Refresh);
Refresh.defaultProps = {
};
Refresh.propTypes = {
};

export default Refresh;

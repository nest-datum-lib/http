import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

/**
 * https://i.imgur.com/pUE0l4v.png
 */
let Subtitle = (props) => {
	return <StyledWrapper { ...props } />;
};

Subtitle = React.memo(Subtitle);
Subtitle.defaultProps = {
};
Subtitle.propTypes = {
};

export default Subtitle;

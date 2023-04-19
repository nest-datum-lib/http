import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

/**
 * https://i.imgur.com/rEFlwDM.png
 */
let Info = (props) => {
	return <StyledWrapper { ...props } />;
};

Info = React.memo(Info);
Info.defaultProps = {
};
Info.propTypes = {
};

export default Info;

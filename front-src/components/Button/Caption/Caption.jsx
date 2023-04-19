import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

/**
 * https://i.imgur.com/0sa0SBK.png
 */
let Caption = (props) => {
	return <StyledWrapper { ...props } />;
};

Caption = React.memo(Caption);
Caption.defaultProps = {
};
Caption.propTypes = {
};

export default Caption;

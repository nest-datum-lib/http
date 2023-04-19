import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

let Text = (props) => {
	return <StyledWrapper { ...props } />;
};

Text = React.memo(Text);
Text.defaultProps = {
};
Text.propTypes = {
};

export default Text;

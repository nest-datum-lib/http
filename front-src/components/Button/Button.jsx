import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

let Button = (props) => {
	return <StyledWrapper { ...props } />;
};

Button = React.memo(Button);
Button.defaultProps = {
};
Button.propTypes = {
};

export default Button;

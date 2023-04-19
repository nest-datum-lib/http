import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

/**
 * https://i.imgur.com/jGLiIgg.png
 */
let TypographyError = (props) => {
	return <StyledWrapper { ...props } />;
};

TypographyError = React.memo(TypographyError);
TypographyError.defaultProps = {
};
TypographyError.propTypes = {
};

export default TypographyError;

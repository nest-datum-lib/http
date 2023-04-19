import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

/**
 * https://i.imgur.com/8lJ4oPf.png
 */
let Password = (props) => {
	return <StyledWrapper { ...props } />;
};

Password = React.memo(Password);
Password.defaultProps = {
};
Password.propTypes = {
};

export default Password;

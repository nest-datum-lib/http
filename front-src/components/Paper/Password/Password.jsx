import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

let Password = (props) => {
	return <StyledWrapper { ...props } />;
};

Password = React.memo(Password);
Password.defaultProps = {
};
Password.propTypes = {
};

export default Password;

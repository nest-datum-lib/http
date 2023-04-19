import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

let User = (props) => {
	return <StyledWrapper { ...props } />;
};

User = React.memo(User);
User.defaultProps = {
};
User.propTypes = {
};

export default User;

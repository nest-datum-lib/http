import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

let Email = (props) => {
	return <StyledWrapper { ...props } />;
};

Email = React.memo(Email);
Email.defaultProps = {
};
Email.propTypes = {
};

export default Email;

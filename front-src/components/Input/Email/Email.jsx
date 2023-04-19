import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

let Email = ({ storeFormName, ...props }) => {
	return <StyledWrapper { ...props } hiddenLabel />;
};

Email = React.memo(Email);
Email.defaultProps = {
};
Email.propTypes = {
};

export default Email;

import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

/**
 * https://i.imgur.com/YZIdwhK.png
 */
let Email = (props) => {
	return <StyledWrapper { ...props } />;
};

Email = React.memo(Email);
Email.defaultProps = {
};
Email.propTypes = {
};

export default Email;

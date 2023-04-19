import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

/**
 * https://i.imgur.com/X1jRquo.png
 */
let Header = (props) => {
	return <StyledWrapper { ...props } />;
};

Header = React.memo(Header);
Header.defaultProps = {
};
Header.propTypes = {
};

export default Header;

import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

/**
 * https://i.imgur.com/7zxeoGY.png
 */
let Primary = (props) => {
	return <StyledWrapper { ...props } component="div" />;
};

Primary = React.memo(Primary);
Primary.defaultProps = {
};
Primary.propTypes = {
};

export default Primary;

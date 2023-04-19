import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

/**
 * https://i.imgur.com/0tBupmM.png
 */
let Primary = (props) => {
	return <StyledWrapper { ...props } />;
};

Primary = React.memo(Primary);
Primary.defaultProps = {
};
Primary.propTypes = {
};

export default Primary;

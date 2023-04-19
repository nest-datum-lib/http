import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

let Primary = (props) => {
	return <StyledWrapper { ...props } />;
};

Primary = React.memo(Primary);
Primary.defaultProps = {
};
Primary.propTypes = {
};

export default Primary;

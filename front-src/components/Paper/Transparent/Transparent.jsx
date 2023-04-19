import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

let Transparent = (props) => {
	return <StyledWrapper { ...props } />;
};

Transparent = React.memo(Transparent);
Transparent.defaultProps = {
};
Transparent.propTypes = {
};

export default Transparent;

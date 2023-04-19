import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

let Hints = (props) => {
	return <StyledWrapper { ...props } />;
};

Hints = React.memo(Hints);
Hints.defaultProps = {
};
Hints.propTypes = {
};

export default Hints;

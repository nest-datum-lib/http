import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

let Dashed = (props) => {
	return <StyledWrapper { ...props } />;
};

Dashed = React.memo(Dashed);
Dashed.defaultProps = {
};
Dashed.propTypes = {
};

export default Dashed;

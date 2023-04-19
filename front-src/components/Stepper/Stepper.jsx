import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

let Stepper = (props) => {
	return <StyledWrapper { ...props } />;
};

Stepper = React.memo(Stepper);
Stepper.defaultProps = {
};
Stepper.propTypes = {
};

export default Stepper;

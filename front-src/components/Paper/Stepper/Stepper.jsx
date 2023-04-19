import React from 'react';
import StepperWizard from 'components/Stepper/Wizard';
import StyledWrapper from './Styled/Wrapper.jsx';

let Stepper = (props) => {
	return <StyledWrapper { ...props }>
		<StepperWizard />
	</StyledWrapper>;
};

Stepper = React.memo(Stepper);
Stepper.defaultProps = {
};
Stepper.propTypes = {
};

export default Stepper;

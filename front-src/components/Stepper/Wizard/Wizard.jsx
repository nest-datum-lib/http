import React from 'react';
import { useLocation } from 'react-router-dom';
import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';
import Label from './Label';
import StyledWrapper from './Styled/Wrapper.jsx';
import StyledStep from './Styled/Step.jsx';

const steps = [
	`/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_CV_BUILDER}/${process.env.ROUTE_PHONE}`,
	`/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_CV_BUILDER}/${process.env.ROUTE_EXPERIENCE}`,
	`/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_CV_BUILDER}/${process.env.ROUTE_EDUCATION}`,
	`/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_CV_BUILDER}/${process.env.ROUTE_SKILLS}`,
	`/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_CV_BUILDER}/${process.env.ROUTE_DESIRABLE_WORKPLACE}`,
];
let Wizard = (props) => {
	const { pathname } = useLocation();

	return <StyledWrapper { ...props }>
		<Stepper activeStep={steps.indexOf(pathname) + 1} alternativeLabel>
			<StyledStep>
				<StepLabel StepIconComponent={Label} />
			</StyledStep>
			<StyledStep>
				<StepLabel StepIconComponent={Label} />
			</StyledStep>
			<StyledStep>
				<StepLabel StepIconComponent={Label} />
			</StyledStep>
			<StyledStep>
				<StepLabel StepIconComponent={Label} />
			</StyledStep>
			<StyledStep>
				<StepLabel StepIconComponent={Label} />
			</StyledStep>
		</Stepper>
	</StyledWrapper>;
};

Wizard = React.memo(Wizard);
Wizard.defaultProps = {
};
Wizard.propTypes = {
};

export default Wizard;

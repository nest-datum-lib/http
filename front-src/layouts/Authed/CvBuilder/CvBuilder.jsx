import React from 'react';
import { Outlet } from 'react-router-dom';
import { ContextApp } from '@nest-datum-ui/Context';
import PaperStepper from 'components/Paper/Stepper';
import StyledWrapper from './Styled/Wrapper.jsx';

let CvBuilder = () => {
	const { cvBuilderRoutesFlag } = React.useContext(ContextApp);

	return <StyledWrapper>
		{cvBuilderRoutesFlag && <PaperStepper />}
		<Outlet />
	</StyledWrapper>;
};

CvBuilder = React.memo(CvBuilder);
CvBuilder.defaultProps = {
};
CvBuilder.propTypes = {
};

export default CvBuilder;

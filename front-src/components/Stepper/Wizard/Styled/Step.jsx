import styled from 'styled-components';
import MuiStep from '@mui/material/Step';

const Step = styled(MuiStep)`
	padding: 0px !important;

	&& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line{
		background: #2E3BE3;
		width: 100%;
	}
	&& .MuiStepConnector-root.Mui-active .MuiStepConnector-line{
		background: #2E3BE3;
		width: 50%;
	}
	&& .MuiStepConnector-line{
		border: 0px;
		height: 4px;
	}
	&& .MuiStepConnector-root{
		background: #D9DBF7;
    	height: 4px;
		left: calc(-50% + 14px);
		right: calc(50% + 14px);
		z-index: 1;
	}
`;

export default Step;
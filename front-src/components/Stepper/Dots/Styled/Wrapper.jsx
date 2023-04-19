import styled from 'styled-components';
import Grid from '@mui/material/Grid';

const Wrapper = styled(Grid)`
	& .stepper-dots__dot-item {
		width: 8px;
		height: 8px;
		background-color: #FFF;
		border-radius: 50%;
		border: 2px solid #20266D;
		cursor: pointer;

		&.active {
			background-color: #20266D;
		}
	}
`;

export default Wrapper;
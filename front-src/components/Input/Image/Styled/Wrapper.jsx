import styled from 'styled-components';
import Button from '@mui/material/Button';

const Wrapper = styled(Button)`
	width: 100%;

	& > .MuiBox-root {
		width: 100%;
		background-position: center;
		background-size: cover;

		&:after {
			content: "";
			display: block;
			padding-bottom: 100%;
		}
	}
`;

export default Wrapper;
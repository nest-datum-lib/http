import styled from 'styled-components';
import Box from '@mui/material/Box';

const Wrapper = styled(Box)`
	${({ completed }) => completed
		? `color: white;`
		: ''}
`;

export default Wrapper;
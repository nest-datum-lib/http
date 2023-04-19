import styled from 'styled-components';
import Box from '@mui/material/Box';

const Wrapper = styled(Box)`
	display: flex;
	justify-content: center;
	flex-direction: row;
	padding-top: 24px;

	@media (max-width: 600px) {
        padding-top: 0px;
    }
`;

export default Wrapper;
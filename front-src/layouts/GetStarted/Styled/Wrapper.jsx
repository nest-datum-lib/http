import styled from 'styled-components';
import Box from '@mui/material/Box';

const Wrapper = styled(Box)`
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding-top: 32px;

    @media (max-width: 600px) {
        width: 100%;
    }
`;

export default Wrapper;
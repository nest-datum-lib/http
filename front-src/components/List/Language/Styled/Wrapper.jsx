import styled from 'styled-components';
import Box from '@mui/material/Box';

const Wrapper = styled(Box)`
    gap: 8px;
    display: flex;
    flex-direction: column;
    
    && .list-language__item-wrapper:first-child{
        margin-top: 8px;
    }
`;

export default Wrapper;
import styled from 'styled-components';
import Box from '@mui/material/Box';

const Wrapper = styled(Box)`
    width: 74px;
    height: 74px;
    position: relative;

    && .MuiIconButton-root{
        position: absolute;
        padding: 4.6px;
        border-radius: 6px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12);
        background: #FFFFFF;
        bottom: 0px;
        right: 0px;
    }

    && .MuiAvatar-circular{
        border: 4px solid #2E3BE3;
        border-radius: 100%;
        box-sizing: border-box;
        width: inherit;
        height: inherit;
    }
`;

export default Wrapper;
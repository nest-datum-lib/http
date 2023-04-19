import styled from 'styled-components';
import Paper from '@mui/material/Paper';

const Wrapper = styled(Paper)`
    && .MuiLinearProgress-bar{
        background: #2E3BE3;
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);
        border-radius: 2px;
    }
    && .MuiLinearProgress-root{
        height: 100%;
        background-color: #ECECEC!important;
        box-shadow: inset 0px 4px 9px rgba(0, 0, 0, 0.09)!important;
        border-radius: 2px;
    }
`;

export default Wrapper;
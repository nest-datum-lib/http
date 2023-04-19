import styled from 'styled-components';
import Box from '@mui/material/Box';

const Wrapper = styled(Box)`
    && .MuiPaper-root{
        border-radius: 16px!important;
        padding: 60px 16px;
        margin-bottom: 16px;
    }
    && .MuiPaper-root .MuiList-root{
        display: flex;
        flex-direction: column;
        gap: 22px;
    }
    && .paper-menu-profile_btns-list a,
    && .paper-menu-profile_btns-list button{
        width: 100%;
        margin-bottom: 16px;
    }
`;

export default Wrapper;
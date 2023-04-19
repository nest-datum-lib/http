import styled from 'styled-components';
import Box from '@mui/material/Box';

const Wrapper = styled(Box)`
    && .MuiListItemIcon-root {
        min-width: 40px;
    }
    && .MuiList-root .MuiListItemText-root{
        margin-top: 0px;
        margin-bottom: 0px;
    }
    && .MuiList-root li .MuiButtonBase-root{
        height: 43px;
        position: relative;
    }
    && .MuiList-root li span{
        font-weight: 600!important;
        font-size: 18px!important;
        line-height: 26px!important;
    }

    && .MuiList-root li a.MuiButtonBase-root svg > *,
    && .MuiList-root li a.MuiButtonBase-root{
        background-color: transparent!important;
        color: #424242!important;
    }

    && .MuiList-root li span.MuiButtonBase-root:hover svg > *,
    && .MuiList-root li span.MuiButtonBase-root:hover,
    && .MuiList-root li span.MuiButtonBase-root svg > *,
    && .MuiList-root li a.MuiButtonBase-root:hover svg > *,
    && .MuiList-root li a.MuiButtonBase-root:hover{
        background-color: #2E3BE3!important;
        color: #fff!important;
        fill: #fff!important;
    }

    && .MuiList-root li span.MuiButtonBase-root::after{
        content: "";
        width: 5px;
        height: 43px;
        background: #2E3BE3;
        border-radius: 0px 2px 2px 0px;
        position: absolute;
        right: -21px;
    }
`;

export default Wrapper;
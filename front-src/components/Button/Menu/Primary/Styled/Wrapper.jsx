import styled from 'styled-components';
import ListItemButton from '@mui/material/ListItemButton';

const Wrapper = styled(ListItemButton)`
    width: auto;
    padding: 8px 16px!important;
    background: #2E3BE3!important;
    border-radius: 7px!important;
    font-weight: 500!important;
    font-size: 18px!important;
    line-height: 26px!important;
    color: #FFFFFF!important;
    text-transform: initial!important;
    display: flex!important;
    justify-content: flex-start!important;
    
    && span{
        margin-right: 18px;
        margin-left: 0px;
    }

    &:hover svg > *,
    &:hover{
        background-color: transparent!important;
        color: #2E3BE3!important;
        fill: #2E3BE3!important;
    }
`;

export default Wrapper;
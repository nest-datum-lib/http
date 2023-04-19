import styled from 'styled-components';
import Grid from '@mui/material/Grid';

const Wrapper = styled(Grid)`
    gap: 29px;
    align-items: center;
    padding: 31px 20px 0px 20px;

    && p:nth-child(1){
        text-align: left!important;
    }
    && p:nth-child(2){
        position: relative;
        width: max-content;
    }
    && .paper-profile-min_search-status.active{
        background: #00AA6D;
        width: 6px;
        height: 6px;
        border-radius: 100%;
        display: block;
        top: 2px;
        position: absolute;
        right: -6px;
    }

    @media (max-width: 600px) {
        gap: 16px;
        padding-top: 10px;
        flex-direction: column!important;
        text-align: center!important;
        align-items: center!important;
        justify-content: center!important;

        && p:nth-child(2){
            position: relative;
            margin-left: auto;
            margin-right: auto;
            width: max-content;
        }
    }
`;

export default Wrapper;
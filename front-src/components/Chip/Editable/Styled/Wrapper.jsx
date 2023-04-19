import styled from 'styled-components';
import Chip from '@mui/material/Chip';

const Wrapper = styled(Chip)`
    background-color: transparent!important;
    border: 2px solid #8087E6!important;
    border-radius: 16px;
    color: #0A0A0A;
    width: 100%;
    justify-content: space-between!important;
    padding: 9px 16px 9px 24px!important;
    text-transform: capitalize;
    height: 40px!important;

    && span{
        flex: 1;
    }
    && svg{
        margin: 0px!important;
    }
    && span div p{
        flex: 1;
        margin-bottom: 0px!important;
        text-align: left;
    }
    && .MuiChip-label{
        padding-left: 0px;
        padding-right: 0px;
    }
`;

export default Wrapper;
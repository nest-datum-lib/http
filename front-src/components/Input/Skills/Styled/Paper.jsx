import styled from 'styled-components';
import Paper from "@mui/material/Paper";

const InputAutocomplete = styled(Paper)`
    margin-top: 8px;
    margin-bottom: 8px;
    border-radius: 16px!important;
    box-shadow: 0px 8px 16px rgb(0 0 0 / 8%)!important;
    
    && li{
        font-family: Jost!important;
        font-style: normal;
        font-weight: 400!important;
        font-size: 16px!important;
        line-height: 23px!important;
        color: #424242!important;
        text-transform: capitalize;
    }
`;

export default InputAutocomplete;
import styled from 'styled-components';
import InputUpload from '@nest-datum-ui/Input/Upload';

const Wrapper = styled(InputUpload)`
    width: 100%;
    background: #FFFFFF!important;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08)!important;
    border-radius: 16px!important;
    padding: 12px!important;
    color: #151948!important;
    font-family: Jost!important;
    font-style: normal!important;
    font-weight: 500!important;
    font-size: 16px!important;
    line-height: 23px!important;
    text-align: center!important;
    text-transform: initial!important;

    &:hover{
        background-color: transparent!important;
    }
`;

export default Wrapper;
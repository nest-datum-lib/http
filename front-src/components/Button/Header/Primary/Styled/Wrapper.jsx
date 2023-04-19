import styled from 'styled-components';
import Button from '../../../Button.jsx';

const Wrapper = styled(Button)`
    background-color: #2E3BE3!important;
    box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.12)!important;
    border-radius: 16px!important;
    padding: 15.5px!important;
    min-width:100px!important;
    font-weight: 600!important;
    font-size: 16px!important;
    line-height: 23px!important;
    text-align: center!important;
    color: #FFFFFF!important;
    text-transform: none!important;

    &:hover{
        background-color: transparent!important;
        color: #2E3BE3!important;
    }
`;

export default Wrapper;
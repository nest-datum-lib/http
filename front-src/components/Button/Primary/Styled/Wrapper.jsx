import styled from 'styled-components';
import Button from '../../Button.jsx';

const Wrapper = styled(Button)`
    text-align: center!important;    
    color: #FFFFFF!important;
    font-weight: 500!important;
    font-size: 16px!important;
    line-height: 23px!important;
    padding:12px!important;
    background: #2E3BE3!important;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12)!important;
    border-radius: 16px!important;
    text-transform: initial!important;

    &:hover{
        background-color: transparent!important;
        color: #2E3BE3!important;
    }
`;

export default Wrapper;
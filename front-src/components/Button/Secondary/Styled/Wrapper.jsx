import styled from 'styled-components';
import Button from '../../Button.jsx';

const Wrapper = styled(Button)`
    background: #FFFFFF!important;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08)!important;
    border-radius: 16px!important;
    padding: 12.5px!important;
    font-weight: 500!important;
    font-size: 16px!important;
    line-height: 23px!important;
    text-align: center!important;
    color: #151948!important;
    text-transform: initial!important;

    &:hover{
        background-color: transparent!important;
        color: #2E3BE3!important;
    }
`;

export default Wrapper;
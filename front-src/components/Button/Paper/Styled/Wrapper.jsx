import styled from 'styled-components';
import Button from '../../Button.jsx';

const Wrapper = styled(Button)`
    display: flex!important;
    flex: 1;
    justify-content: center!important;
    align-items: center!important;
    height: 184px!important;
    background: #FFFFFF!important;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08)!important;
    border-radius: 32px!important;
    font-weight: 500!important;
    font-size: 18px!important;
    line-height: 26px!important;
    color: #202020!important;
    text-transform: initial!important;

    &:hover{
        background-color: transparent!important;
    }
`;

export default Wrapper;
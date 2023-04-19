import styled from 'styled-components';
import Button from '../../Button.jsx';

const Wrapper = styled(Button)`
    font-weight: 400!important;
    font-size: 14px!important;
    line-height: 20px!important;
    text-align: center!important;
    color: #424242!important;
    text-transform: initial!important;
    padding: 10px 12px!important;
    display: flex!important;
    justify-content: center!important;
    align-items: center!important;
    background: #FFFFFF!important;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08)!important;
    border-radius: 16px!important;

    &:hover{
        background-color: transparent!important;
    }

    && span{
        margin-right: 12px;
        margin-left: 0px;
    }
`;

export default Wrapper;
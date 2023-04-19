import styled from 'styled-components';
import Button from '../../Button.jsx';

const Wrapper = styled(Button)`
    font-weight: 500!important;
    font-size: 16px!important;
    line-height: 23px!important;
    text-align: right!important;
    color: #2E3BE3!important;
    padding: 12.5px!important;
    border: 2px solid #8087E6!important;
    filter: drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.08));
    border-radius: 16px!important;
    text-transform: initial!important;

    &:hover{
        background-color: transparent!important;
    }
`;

export default Wrapper;
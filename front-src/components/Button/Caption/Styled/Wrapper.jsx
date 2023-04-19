import styled from 'styled-components';
import Button from '../../Button.jsx';

const Wrapper = styled(Button)`
    font-weight: 500!important;
    font-size: 12px!important;
    line-height: 17px!important;
    text-decoration-line: underline!important;
    color: #0A0A0A!important;
    text-transform: initial!important;

    &:hover{
        background-color: transparent!important;
    }
`;

export default Wrapper;
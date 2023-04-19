import styled from 'styled-components';
import Button from '../../Button.jsx';

const Wrapper = styled(Button)`
    font-weight: 400!important;
    font-size: 14px!important;
    line-height: 20px!important;
    text-align: center!important;
    color: #8087E6!important;
    text-transform: initial!important;

    &:hover{
        background-color: transparent!important;
    }
`;

export default Wrapper;
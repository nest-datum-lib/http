import styled from 'styled-components';
import Button from '../../../Button.jsx';

const Wrapper = styled(Button)`
    font-family: Jost;
    font-weight: 600!important;
    font-size: 18px!important;
    line-height: 26px!important;
    text-transform: none!important;
    text-decoration: underline!important;
    padding: 0px!important;
    color: #2E3BE3!important;

    &:hover{
        background-color: transparent!important;
    }
`;

export default Wrapper;
import styled from 'styled-components';
import Button from '../../Button.jsx';

const Wrapper = styled(Button)`
    font-style: normal;
    font-weight: 600!important;
    font-size: 16px!important;
    line-height: 23px!important;
    color: #424242!important;
    text-transform: none!important;
    padding: 0px!important;
    min-width: 0!important;

    &:hover {
        background-color: transparent!important;
    }
    
    span&:after,
    &:hover:after {
        content: " ";
        position: absolute;
        background: #2E3BE3;
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);
        border-radius: 2px;
        bottom: -21px;
        height: 10px;
        width: calc(100% + 24px);
    }
`;

export default Wrapper;
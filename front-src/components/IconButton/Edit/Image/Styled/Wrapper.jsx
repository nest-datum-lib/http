import styled from 'styled-components';
import Edit from '../../../IconButton.jsx';

const Wrapper = styled(Edit)`
    &:hover{
        background-color: unset!important;
    }
    & > .iconEdit{
        position: absolute;
        background: #FFFFFF!important;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12);
        border-radius: 7px!important;
        padding: 7.69px!important;
        top: 10px;
        right: 10px;
    }
`;

export default Wrapper;
import styled from 'styled-components';
import IconButton from '../../../IconButton.jsx';

const Wrapper = styled(IconButton)`
    padding: 7px!important;
    position: absolute;
    background: #FFFFFF!important;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12);
    border-radius: 7px!important;
    padding: 7.69px!important;
    top: 0px;
    right: 0px;

    &:hover{
        background-color: unset!important;
    }

    @media (max-width: 600px) {
        position: absolute!important;
        right: 48px;
    }
`;

export default Wrapper;
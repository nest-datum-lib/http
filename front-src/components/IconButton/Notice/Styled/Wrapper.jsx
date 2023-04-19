import styled from 'styled-components';
import IconButton from '../../IconButton';

const Wrapper = styled(IconButton)`
    &:hover {
        background-color: transparent!important;
    }
    && svg{
        display: block;
    }
`;

export default Wrapper;
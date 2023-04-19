import styled from 'styled-components';
import IconButton from '../../IconButton';

const Wrapper = styled(IconButton)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    background: #FFFFFF;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);
    border-radius: 6px!important;
    padding: 0px!important;
    
    &:hover{
        background-color: transparent!important;
    }
`;

export default Wrapper;
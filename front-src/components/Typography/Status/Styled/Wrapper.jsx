import styled from 'styled-components';
import Typography from '../../Typography.jsx';

const Wrapper = styled(Typography)`
    color: ${({ color }) => (color === 'dark')
        ? '#0A0A0A'
        : '#616161'};
    font-weight: 500!important;
    font-size: 18px!important;
    line-height: 26px!important;
`;

export default Wrapper;
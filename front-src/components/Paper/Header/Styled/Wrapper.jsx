import styled from 'styled-components';
import Paper from '../../Paper.jsx';

const Wrapper = styled(Paper)`
    display: flex;
    align-items: center;
    border: 1px solid #FFFFFF;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08)!important;
    border-radius: 0px 0px 16px 16px!important;
    padding: 0 84px 0 84px;
    height: 122px;

    @media (max-width: 600px) {
        display: none;
    }
`;

export default Wrapper
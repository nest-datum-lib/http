import styled from 'styled-components';
import Primary from '../../Primary';

const Wrapper = styled(Primary)`
    padding: 12px!important;
    
    @media (max-width: 600px) {
        padding: 9px!important;
        font-weight: 600!important;
        font-size: 12px!important;
        line-height: 17px!important;
        border-radius: 10px!important;
    }
`;

export default Wrapper;
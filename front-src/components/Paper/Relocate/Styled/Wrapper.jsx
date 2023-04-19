import styled from 'styled-components';
import Paper from '../../Paper.jsx';

const Wrapper = styled(Paper)`
    max-width: 480px;
    width: 480px;
    padding: 38px 76px 61px 76px;
    box-sizing: border-box;
    background: #FFFFFF;
    border-radius: 16px!important;
    margin-bottom: 24px;
    margin-left: auto;
    margin-right: auto;

    && .MuiTypography-root{
        margin-bottom: 24px;
    }
`;

export default Wrapper;
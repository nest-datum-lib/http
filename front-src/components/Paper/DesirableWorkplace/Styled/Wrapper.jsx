import styled from 'styled-components';
import Paper from '../../Paper.jsx';

const Wrapper = styled(Paper)`
    background: #FFFFFF;
    box-shadow: 0px 8px 16px rgb(0 0 0 / 8%)!important;
    border-radius: 16px!important;
    padding: 40px 75px 54px 75px;
    margin-bottom: 24px;
    width: 100%;
    box-sizing: border-box;

    && .MuiTypography-root{
        margin-bottom: 24px;
    }

    @media (max-width: 600px) {
        padding: 20px;
        padding-top: 0px;
        box-shadow: unset!important;
        min-height: calc(100vh - 150px);

        && input {
            padding: 12px 24px 12px 24px;
        }
        && button {
            margin-top: calc(100vh / 6)!important;
        }
    }
`;

export default Wrapper;
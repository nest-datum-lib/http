import styled from 'styled-components';
import Paper from '../../Paper.jsx';

const Wrapper = styled(Paper)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 26px;
    width: 540px;
    box-sizing: border-box;
    padding: 40px 60px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08)!important;
    border-radius: 16px!important;
    margin-bottom: 24px;

    && .forgotPasswordBtn{
        margin-top: 24px;
    }

    && > .MuiBox-root{
        width: 100%;
    }

    && .infoText {
        margin-top: 24px!important;
    }
    && .infoText + a {
        text-decoration: underline;
    }

    @media (max-width: 600px) {
        margin-top: 0px;
        margin-bottom: 0px;
        min-height: 100vh;
        box-shadow: none!important;
        padding: 0px 48px;

        && .titleSignIn{
            margin-bottom: 36px!important;
        }
    }
`;

export default Wrapper;
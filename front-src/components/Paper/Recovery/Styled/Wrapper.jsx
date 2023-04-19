import styled from 'styled-components';
import Paper from '../../Paper.jsx';

const Wrapper = styled(Paper)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 26px;
    width: 570px;
    box-sizing: border-box;
    padding: 48px 80px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08)!important;
    border-radius: 16px!important;
    margin-bottom: 24px;

    && .infoTitle{
        margin-bottom: 48px;
        font-weight: 400!important;
        font-size: 16px!important;
        line-height: 23px!important;
        text-align: center;
        color: #0A0A0A;
    }

    && > .MuiBox-root{
        width: 100%;
    }

    && .form-children__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }

    && .form-children__wrapper button{
        width: 100%;
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
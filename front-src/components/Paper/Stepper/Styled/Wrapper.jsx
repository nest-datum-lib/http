import styled from 'styled-components';
import PaperPrimary from '../../Primary';

const Wrapper = styled(PaperPrimary)`
    background: #FFFFFF;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08)!important;
    border-radius: 16px!important;
    border: 0px!important;
    margin-bottom: 24px;
    margin-top: 2px;
    padding: 20px 38px;
    box-sizing: border-box;
    width: 100%;

    && .MuiStepper-horizontal{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    && .MuiStepLabel-iconContainer{
        width: 28px;
        height: 28px;
        background: #D9DBF7;
        border-radius: 6px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #FFFFFF;
    }
    && .MuiStepLabel-iconContainer.Mui-completed div{
        color: #FFFFFF!important;
    }
    && .MuiStepLabel-iconContainer.Mui-completed{
        background: #2E3BE3;
    }

    @media (max-width: 600px) {
        margin-top: 22px;
        padding: 13px 0px;

        && .MuiStepLabel-iconContainer {
            width: 19px;
            height: 19px;
            font-size: 10px;
            line-height: 14px;
            z-index: 5;
        }

        && .MuiStepConnector-root{
            left: calc(-50% + 7px);
            right: calc(50% + 7px);
            top: 8px;
        }
        && .MuiStepConnector-line,
        && .MuiStepConnector-root{
            height: 2.75px;
        }
    }
`;

export default Wrapper;
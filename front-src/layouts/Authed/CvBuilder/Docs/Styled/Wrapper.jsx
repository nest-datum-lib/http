import styled from 'styled-components';
import Paper from 'components/Paper';

const Wrapper = styled(Paper)`
    max-width: 480px;
    width: 480px;
    padding: 38px 76px 61px 76px;
    box-sizing: border-box;
    background: #FFFFFF;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08)!important;
    border-radius: 16px!important;
    margin-bottom: 24px;
    margin-left: auto;
    margin-right: auto;

    && .paper-docs_title{
        margin-bottom: 24px;
    }

    && .paper-docs_tabs{
        margin-bottom: 35px;

        .MuiButtonBase-root:hover{
            background-color: transparent!important;
        }
        .MuiButtonBase-root{
            padding: 0px 2.5px;
            margin-right: 11px;
            color: #0A0A0A;
            font-weight: 500;
            font-size: 18px;
            line-height: 26px;
            text-transform: capitalize;
        }

        button:after{
            content: "";
            background: #2E3BE3;
            border-radius: 2px;
            width: 100%;
            height: 8px;
            position: absolute;
            bottom: -10px;
        }
    }
`;

export default Wrapper;
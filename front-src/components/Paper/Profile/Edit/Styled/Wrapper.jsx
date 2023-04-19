import styled from 'styled-components';
import Paper from '../../../Paper.jsx';

const Wrapper = styled(Paper)`
    max-width: 480px;
    padding: 38px 76px 61px 76px;
    box-sizing: border-box;
    background: #FFFFFF;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08)!important;
    border-radius: 16px!important;
    margin-bottom: 24px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;

    && .paper-profile_title-form{
        margin-bottom: 24px;
        font-weight: 600!important;
    }
    && .titleOfGetHired{
        margin-bottom: 10px;
        font-weight: 600!important;
    }
    && .subtitleOfGetHired{
        margin-bottom: 17px;
    }

    @media (max-width: 600px) {
        padding: 50px;
        box-shadow: unset!important;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;

        && input {
            padding: 12px 24px 12px 24px;
        }
    }
`;

export default Wrapper;
import styled from 'styled-components';
import Paper from '../../Paper.jsx';

const Wrapper = styled(Paper)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 32px;
    margin-bottom: 24px;
    background: #FFFFFF;
    border-radius: 16px!important;

    && .paper-profile_min-edit-line{
        padding-bottom: 62px;
    }
    && .paper-profile_info-box{
        padding-left: 46px;
        padding-bottom: 10px;
    }
    && .paper-profile_info-box p{
        text-align: left;
    }
    && .paper-profile_info-title{
        font-size: 16px!important;
        line-height: 23px!important;
        margin-bottom: 8px;
    }
    && .paper-profile_info-subtitle{
        margin-bottom: 24px;
    }

    @media (max-width: 600px) {
        padding: 0 48px;
        position: relative;
        box-shadow: unset!important;

        && .paper-profile_info-box{
            padding-left: 0px;
            padding-bottom: 0px;
        }
    }
`;

export default Wrapper;
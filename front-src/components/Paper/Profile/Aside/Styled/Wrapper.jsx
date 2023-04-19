import styled from 'styled-components';
import Paper from '../../../Paper.jsx';

const Wrapper = styled(Paper)`
    background: #FFFFFF;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08)!important;
    border-radius: 16px!important;
    padding: 15px 18px;
    margin-bottom: 24px;

    && button{
        width: 100%;
        margin-bottom: 18px;
    }
    && .nameOfUserTitle{
        margin-bottom: 18px;
    }
    
    && .subTitle{
        width: 100%;
        text-align: left;
        font-size: 16px!important;
        line-height: 23px!important;
        padding-bottom: 8px;
    }

    && .infoTitle{
        font-weight: 600!important;
        font-size: 16px!important;
        line-height: 23px!important;
        margin-bottom: 16px;
        text-align: left;
    }
`;

export default Wrapper;
import styled from 'styled-components';
import Paper from '../../../Paper.jsx';

const Wrapper = styled(Paper)`
    background: #FFFFFF;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08)!important;
    border-radius: 16px!important;
    padding: 24px 30px;
    margin-bottom: 16px;

    && .dateNotify{
        color: #757575;
        font-weight: 500;
        font-size: 12px;
        line-height: 17px;
        text-align: right;
    }

    && .notifyTitle{
        margin-bottom: 12px;
        font-weight: 500;
        font-size: 16px;
        line-height: 23px;
    }

    && .notifySubTitle{
        margin-bottom: 20px;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
    }

    && .boxNotifyTags .MuiGrid-item{
        font-weight: 500;
        font-size: 16px;
        line-height: 23px;
    }
    && .boxNotifyTags .MuiGrid-container{
        align-items: center;
    }
    && .boxNotifyTags .MuiGrid-item{
        display: flex;
    }
`;

export default Wrapper;
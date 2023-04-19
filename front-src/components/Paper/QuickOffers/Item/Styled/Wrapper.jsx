import styled from 'styled-components';
import Paper from '../../../Paper.jsx';

const Wrapper = styled(Paper)`
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08)!important;
    border-radius: 32px!important;
    padding: 24px 43px;
    box-sizing: border-box;
    width: 100%;

    && .MuiGrid-container{
        justify-content: space-between;
        gap: 20px;
    }
    && .MuiGrid-item{
        flex: 1;
    }
    && .MuiGrid-item:first-child{
        flex: 1.5;
    }
    && .MuiGrid-item p{
        text-align: left;
    }
    && .MuiGrid-item div{
        font-family: Jost;
        margin-bottom: 9px;
        font-weight: 400;
        font-size: 16px;
        line-height: 23px;
        color: #0A0A0A;
    }
    && .MuiGrid-item p{
        font-family: Jost!important;
        font-weight: 600!important;
        font-size: 18px!important;
        line-height: 26px!important;
    }

    @media (max-width: 600px) {
        min-width: 314px;
        width: calc(100vw - 76px);
        
        && .MuiGrid-container{
            flex-direction: column;
            gap: 8px;
        }
    }
`;

export default Wrapper;
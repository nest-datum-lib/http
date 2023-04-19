import styled from 'styled-components';
import Paper from '../../Paper.jsx';

const Wrapper = styled(Paper)`
    margin-bottom: 32px;
    padding: 32px 38px 32px 43px;
    border-radius: 16px!important;

    && .MuiGrid-container .MuiGrid-item:first-child{
        justify-content: flex-start;
        align-items: flex-start;
        display: flex;
        flex-direction: column;
    }

    && .MuiGrid-container .MuiGrid-item p:nth-child(1){
        font-weight: 600!important;
        margin-bottom: 16px;
    }

    && .MuiGrid-container .MuiGrid-item p:nth-child(2){
        color: #616161!important;
    }

    && .MuiGrid-root a{
        padding: 0px!important;
    }
`;

export default Wrapper;
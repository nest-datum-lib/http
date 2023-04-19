import styled from 'styled-components';
import DateRange from '@nest-datum-ui/Input/DateRange/DateRange.jsx';

const Wrapper = styled(DateRange)`
    && .MuiGrid-container{
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 18px;
    }
    && div.MuiGrid-root{
        margin-top: 0px!important;
        padding-top: 0px!important;
        margin-left: 0px!important;
        padding-left: 0px!important;
    }
    && input {
        background: #F9F9F9;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06), inset 0px 4px 9px rgba(0, 0, 0, 0.12);
        border-radius: 16px;
        border: 0px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 12px 80px 12px 24px;
        gap: 8px;
        font-weight: 400;
        font-size: 16px;
        line-height: 23px;
        font-family: Jost;
        color: #787878;
        flex: 1;

        ::placeholder,
        ::-webkit-input-placeholder {
            opacity: 1;
        }
        :-ms-input-placeholder {
            opacity: 1;
        }
    }

    && fieldset{
        border: 0px;
    }
`;

export default Wrapper;
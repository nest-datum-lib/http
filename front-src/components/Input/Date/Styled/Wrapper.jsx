import styled from 'styled-components';
import InputDate from '@nest-datum-ui/Input/Date';

const Wrapper = styled(InputDate)`
    && div.MuiInputBase-root{
        padding: 0px!important;
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
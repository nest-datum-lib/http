import styled from 'styled-components';
import InputAutocompleteServer from '@nest-datum-ui/Input/Autocomplete/Server';

const Wrapper = styled(InputAutocompleteServer)`
    && .MuiAutocomplete-endAdornment{
        display: none;
    }
    && fieldset{
        border: 0px;
    }
    && input {
        position: relative;
        z-index: 1;
        padding: 12px 80px 12px 24px!important;
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
    && fieldset legend{
        display: none;
    }
    && fieldset {
        height: 47px;
        width: 100%!important;
        box-sizing: border-box;
        background: #F9F9F9;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06), inset 0px 4px 9px rgba(0, 0, 0, 0.12);
        border-radius: 16px;
        border: 0px;
        top: 0px;
        padding: 0px;
    }
`;

export default Wrapper;
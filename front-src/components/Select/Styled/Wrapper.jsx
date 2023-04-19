import styled from 'styled-components';
import Select from '@nest-datum-ui/Select';

const BaseSelect = styled(Select)`
	& .MuiInputLabel-shrink {
		display: none;
	}

    && label{
        font-size: 16px;
        line-height: 23px;
        font-family: Jost;
        color: #787878!important;
        left: 14px;
        top: 4px;
    }

    && .MuiSelect-select{
        z-index: 1;
        padding-right: 32px!important;
        font-weight: 400;
        font-size: 16px;
        line-height: 23px;
        font-family: Jost;
        color: #787878!important;
        padding: 0px;
        padding-left: 24px;
        height: 48px;
        display: flex;
        align-items: center;
    }

    && svg{
        width: 20px;
        height: 20px;
        margin-right: 20px;
        z-index:1;
    }

    && fieldset legend{
        display:none;
    }

    && fieldset{
        background: #F9F9F9;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06), inset 0px 4px 9px rgba(0, 0, 0, 0.12);
        border-radius: 16px;
        border: 0px;
        height: 48px;
        box-sizing: border-box;
        top: 0px;
    }
`;

const Wrapper = styled(
    ({ className, ...props }) => (
        <BaseSelect {...props} MenuProps={{ classes: { paper: className } }} />
    )
)`
    margin-top: 8px;
    margin-bottom: 8px;
    border-radius: 16px!important;
    box-shadow: 0px 8px 16px rgb(0 0 0 / 8%)!important;

    && li{
        font-family: Jost!important;
        font-style: normal;
        font-weight: 400!important;
        font-size: 16px!important;
        line-height: 23px!important;
        color: #424242!important;
        text-transform: capitalize;
    }
`;

export default Wrapper;
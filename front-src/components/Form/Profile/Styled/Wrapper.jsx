import styled from 'styled-components';
import Form from '../../Form.jsx';

const Wrapper = styled(Form)`
    && .form-children__wrapper .btns-form .MuiGrid-item a,
    && .form-children__wrapper .btns-form .MuiGrid-item button{
        width: 100%;
    }
    && .form-children__wrapper .btns-form .MuiGrid-item{
        flex: 1;
    }
    && .form-children__wrapper .btns-form{
        display: flex;
        flex-direction: row;
        gap: 22px;
        margin-top: 38px;
    }
    && .form-children__wrapper{
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    && .MuiGrid-item:first-child label{
        font-size: 16px;
        line-height: 23px;
        font-family: Jost;
        color: #787878!important;
        left: 14px;
        top: 4px;
    }

    && .MuiGrid-item:first-child .MuiSelect-select{
        z-index: 1;
        font-weight: 400;
        font-size: 16px;
        line-height: 23px;
        font-family: Jost;
        color: #787878!important;
        padding: 0px;
        padding-left: 10px;
        height: 48px;
        display: flex;
        align-items: center;
    }

    && .MuiGrid-item:first-child svg{
        width: 20px;
        height: 20px;
        margin-right: 15px;
        z-index:1;
    }

    && .MuiGrid-item:first-child fieldset legend{
        display:none;
    }

    && .MuiGrid-item:first-child fieldset{
        background: #F9F9F9;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06), inset 0px 4px 9px rgba(0, 0, 0, 0.12);
        border-radius: 16px;
        border: 0px;
        height: 48px;
        padding: 0px;
        box-sizing: border-box;
        top: 0px;
    }
`;

export default Wrapper;
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
    && .form-children__wrapper .MuiFormControlLabel-root{
        margin-left: 0px;
        margin-right: 0px;
    }
    && .form-children__wrapper .MuiCheckbox-root{
        padding-left: 0px!important;
        margin-left: 0px!important;
    }
    && .form-children__wrapper .btns-form{
        display: flex;
        flex-direction: row;
        gap: 22px;
        margin-top: 38px;
    }
    && .form-children__wrapper div{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    && .form-children__wrapper{
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
`;

export default Wrapper;
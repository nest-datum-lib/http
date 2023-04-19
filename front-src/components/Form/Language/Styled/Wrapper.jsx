import styled from 'styled-components';
import Form from '../../Form.jsx';

const Wrapper = styled(Form)`
    && .form-children__wrapper{
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    && .form-children__wrapper .btns-form .MuiGrid-item a,
    && .form-children__wrapper .btns-form .MuiGrid-item button{
        width: 100%;
    }
    && .form-children__wrapper .btns-form{
        display: flex;
        flex-direction: row;
        gap: 22px;
        margin-top: 32px;
    }
    && .form-children__wrapper .btn_save-and-add{
        margin-top: 8px;
    }
    && .form-children__wrapper .btns-form .MuiGrid-item{
        flex: 1;
    }
`;

export default Wrapper;
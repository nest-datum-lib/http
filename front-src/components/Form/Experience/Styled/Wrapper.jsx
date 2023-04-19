import styled from 'styled-components';
import Form from '../../Form.jsx';

const Wrapper = styled(Form)`
    && .form-children__wrapper .btns-form .MuiGrid-item,
    && .form-children__wrapper .btns-form button,
    && .form-children__wrapper .btns-form a{
        flex: 1;
        display: flex;
    }
    && .form-children__wrapper .btns-form{
        gap: 22px;
    }
    && .form-children__wrapper > button{
        margin-bottom: 24px;
    }
    && .form-children__wrapper{
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 8px;
    }

    && .dateRange-form .MuiGrid-item input{
        padding: 12px 24px;
    }
    && .dateRange-form .MuiGrid-item{
        flex: 1;
    }
    && .dateRange-form > div{
        display: flex;
        justify-content: center;
        flex-direction: row;
        gap: 11px;
    }
    && .checkbox-form{
        margin-top: 8px;
        margin-bottom: 2px;
        padding-left: 20px;
    }
    && .textarea-form{
        margin-bottom: 8px;
    }
`;

export default Wrapper;
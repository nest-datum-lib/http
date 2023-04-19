import styled from 'styled-components';
import Form from '../../Form.jsx';

const Wrapper = styled(Form)`
    background: #D9D9D9;
    border-radius: 16px;
    min-height: 200px;
    margin-bottom: 16px;

    && .MuiButtonBase-root{
        padding: 0px;
        width: 100%;
        height: 100%;
    }

    && .form-children__wrapper label,
    && .form-children__wrapper{
        height: 100%;
        border-radius: 16px;
        overflow: hidden;
    }
    && .form-children__wrapper label > .MuiBox-root{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export default Wrapper;
import styled from 'styled-components';
import Form from '../../Form.jsx';

const Wrapper = styled(Form)`
    && .btns-form .MuiGrid-item,
    && .btns-form button,
    && .btns-form a{
        flex: 1;
        display: flex;
    }
    && .btns-form{
        gap: 22px;
        margin-top: 26px;
    }

    && .MuiInputBase-root{
        padding: 0px;
    }

    && .typographyBodySecond {
        margin-top: 17px;
    }

    && .inputSkills{
        margin-bottom: 16px;
    }

    && .list-skills__item-wrapper .MuiChip-root,
    && .list-skills__item-wrapper .MuiButtonBase-root{
        background: none;
        border: 2px solid #8087E6;
        border-radius: 16px;
        margin-bottom: 8px;
        font-family: Jost;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 23px;
        color: #0A0A0A;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 9px 16px 9px 24px;
        text-transform: capitalize;
        height: 40px;
    }

    && .form-children__wrapper .MuiBox-root {
        display: flex;
        flex-direction: column;
    }
    && .form-children__wrapper .MuiBox-root button{
        justify-content: flex-end;
    }
`;

export default Wrapper;
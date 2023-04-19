import styled from 'styled-components';
import PaperTransparent from '../../Transparent';

const Wrapper = styled(PaperTransparent)`
    box-shadow: none!important;
    width: 417px;
    max-width: 417px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 24px;

    && svg{
        margin-top: 16px;
        margin-bottom: 40px;
    }
    && div{
        width: 100%;
    }
    && .form-children__wrapper{
        gap: 16px;
        display: flex;
        flex-direction: column;
        width: 100%;
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

    @media (max-width: 600px) {
        padding: 33px;
        min-height: calc(100vh - 150px);
        width: 100%;
        max-width: 100%;

        && svg {
            max-width: 100%;
        }
        && .form-children__wrapper{
            padding: 15px;
            box-sizing: border-box;
        }
    }
`;

export default Wrapper;
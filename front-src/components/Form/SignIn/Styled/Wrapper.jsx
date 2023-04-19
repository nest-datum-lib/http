import styled from 'styled-components';
import Form from '../../Form.jsx';

const Wrapper = styled(Form)`
    && .form-children__wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    && .googleFbBtnsBox{
        gap: 15px;
        padding-bottom: 32px;
        margin-bottom: 16px;
        border-bottom: 1px solid #EBEBEB;
    }
    && .googleFbBtnsBox div{
        flex: 1;
    }

    && .titleOr{
        margin-bottom: 24px!important;
        font-weight: 400!important;
        font-size: 24px!important;
        line-height: 35px!important;
        text-align: center;
        color: #686868;
    }

    && .form-children__wrapper .inputsBox{
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: 100%;
        margin-bottom: 16px;
    }
    && .form-children__wrapper .infoText {
        margin-bottom: 24px;
    }
    && .form-children__wrapper .infoText a{
        color: #8087E6;
    }
    && .form-children__wrapper button{
        width: 100%;
    }

    @media (max-width: 600px) {
        && .googleFbBtnsBox{
            gap: 15px;
            flex-direction: column;
            padding-bottom: 0px;
            margin-bottom: 24px;
            border-bottom: 0px;
        }
        && .form-children__wrapper .inputsBox{
            margin-bottom: 44px;
        }
        && .form-children__wrapper .infoText br:nth-child(1){
            display: contents;
        }
        && .form-children__wrapper .infoText {
            margin-bottom: 48px;
        }
    }
`;

export default Wrapper;
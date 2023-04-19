import styled from 'styled-components';
import PaperPrimary from '../../Primary';

const Wrapper = styled(PaperPrimary)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    background: #FFFFFF;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08)!important;
    border-radius: 16px!important;
    width: 100%;
    padding: 54px 75px 72px 75px;
    margin-bottom: 24px;
    border: 0px!important;
    box-sizing: border-box;
    text-align: center;

    && .form-children__wrapper{
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 24px;
    }

    && .MuiButtonBase-root{
        width: 100%;
    }

    && .MuiGrid-container{
        margin-top: 0px;
        margin-left: 0px;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: row;
        gap: 12px;
    }

    && .MuiGrid-item{
        padding-left: 0px;
        padding-top: 0px;
    }

    && .MuiGrid-item:first-child .MuiFormControl-root{
        height: 48px;
    }

    @media (max-width: 600px) {
        padding: 20px;
        box-shadow: unset!important;
        min-height: calc(100vh - 150px);

        && input {
            padding: 12px 24px 12px 24px;
        }
    }
`;

export default Wrapper;
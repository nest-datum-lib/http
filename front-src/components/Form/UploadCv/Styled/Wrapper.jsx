import styled from 'styled-components';
import Form from '../../Form.jsx';

const Wrapper = styled(Form)`
    && .MuiPaper-root {
        border: 1px dashed #8087E6!important;
        border-radius: 8px;
        padding: 32px 41px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 24px;
        text-align: center;
        box-shadow: none!important;
    }

    && .MuiPaper-root .MuiTypography-root{
        max-width: 213px;
    }

    && .form-children__wrapper .MuiButton-textPrimary{
        margin-top: 32px;
        width: 100%;
    }

    && .paper-cvbuilder_typography-or{
        margin-top: 24px;
        font-weight: 400!important;
        font-size: 18px!important;
        line-height: 26px!important;
    }
`;

export default Wrapper;
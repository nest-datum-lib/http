import styled from 'styled-components';
import Form from '../../Form.jsx';

const Wrapper = styled(Form)`
    && .form-children__wrapper{
        display: flex;
        flex-direction: column;
        gap: 8px;

        div:nth-child(4){
            display: flex;
            justify-content: center;
        }
        .btns-form{
            display: flex;
            flex-direction: row;
            gap: 22px;
            margin-top: 38px;

            .MuiGrid-item{
                flex: 1;
            }
            .MuiGrid-item a,
            .MuiGrid-item button{
                width: 100%;
            }
        }
        .MuiCheckbox-root{
            padding-left: 0px!important;
            margin-left: 0px!important;
        }
        .MuiFormControlLabel-root{
            margin-left: 0px;
            margin-right: 0px;
        }
    }
    && .paper-certificates_date-range{
        display: flex;
        flex-direction: column;

        .MuiGrid-item{
            flex: 1;
        }
        input {
            padding: 12px 24px 12px 24px;
        }
    }
`;

export default Wrapper;
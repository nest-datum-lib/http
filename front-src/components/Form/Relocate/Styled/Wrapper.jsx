import styled from 'styled-components';
import Form from '../../Form.jsx';

const Wrapper = styled(Form)`
    && .form-children__wrapper{
        display: flex;
        flex-direction: column;
        gap: 16px;

        .btns-form{
            display: flex;
            flex-direction: row;
            gap: 22px;
            margin-top: 24px;

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
        div:nth-child(3),
        div:nth-child(1){
            display: flex;
            justify-content: center;
        }
    }
`;

export default Wrapper;
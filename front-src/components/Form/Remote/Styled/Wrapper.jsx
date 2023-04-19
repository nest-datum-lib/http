import styled from 'styled-components';
import Form from '../../Form.jsx';

const Wrapper = styled(Form)`
    && .form-children__wrapper{
        display: flex;
        flex-direction: column;
        gap: 8px;

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
    }
`;

export default Wrapper;
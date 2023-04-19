import styled from 'styled-components';
import Checkbox from '@nest-datum-ui/Checkbox/Checkbox.jsx';

const Wrapper = styled(Checkbox)`
    &:hover{
        background-color: transparent!important;
    }

    && span.MuiCheckbox-root{
        width: 38px;
        height: 38px;
        padding: 0px;
        margin-top: 5px;
        margin-right: 10px;
    }

    && span.MuiTouchRipple-root{
        margin-top: -8px;
    }

    padding-left: 9px!important;
    padding-bottom: 0px!important;
    margin-left: 16px!important;
    margin-right: 0px!important;
    margin-top: 0px!important;
    margin-bottom: 0px!important;
`;

export default Wrapper;